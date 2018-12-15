import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map.Entry;
import java.util.StringTokenizer;
import java.util.TreeMap;

public class StatReader
{
	//可能需要做一个排序。。。？
	//先创建一个文件列表, 每个文件包含了若干函数
	//public static TreeMap<String, String> funcCalledFile = new TreeMap<>();
	//调用函数a的文件x, 文件x中调用a的函数b, b在哪一行调用a, 以及调用的次数 
	ArrayList<ArrayList<callMessage>> ans = new ArrayList<>();
	
	public TreeMap<String, Integer> fnameTbl = new TreeMap<>();
	public TreeMap<String, Integer> funcTbl = new TreeMap<>();
	public String[] fnameR = new String[40];
	public String[] funcR = new String[180];
 	
	//public HashMap<Integer ,Integer> funcToFile = new HashMap<>(); 
	public Integer[] funcToFile = new Integer[200];
	int[][][] xcnt = new int[180][][];
	//file cnt: 37, func cnt 169: 
	//int tot = 0;
	public StatReader()
	{
		//called func: 180
		//call func: 180
		//call line: 1000...我觉得1000够了..
		//对于调用不明确的函数, 直接放到[calledID][0][999]里...
		for(int i=0; i<180; i++)
		{
			xcnt[i] = new int[180][];
			for(int j=0; j<180; j++)
			{
				xcnt[i][j] = new int[1000];
			}
		}
		
		//现在有个问题, 就是函数有没有重名的..? 没有.
	}
	
	public void handle() throws Exception
	{
		fnameTbl.put("unknown", 0);
		fnameR[0] = "unknown";
		for(ArrayList<callMessage> callStack:ans)
		{
			int len = callStack.size();
			if(len == 0)continue;
			String iFunc = callStack.get(0).callFunc;
			String iFile = callStack.get(0).callFile;
			for(int i=0;i<len;i++)
			{
				callMessage mess = callStack.get(i);
				String[] sptp = mess.callFile.split("/");
				mess.callFile = sptp[sptp.length-1].replace(".", "_");
				
				if(!fnameTbl.containsKey(mess.callFile))
				{
					fnameTbl.put(mess.callFile, fnameTbl.size());
				}
				
				if(!funcTbl.containsKey(mess.callFunc))
				{
					funcTbl.put(mess.callFunc, funcTbl.size());
				}
				
				Integer funcID = funcTbl.get(mess.callFunc);
				Integer fileID = fnameTbl.get(mess.callFile);
				fnameR[fileID] = mess.callFile;
				funcR[funcID] = mess.callFunc;
				funcToFile[funcID] = fileID;
				/*
				if(!funcToFile.containsKey(mess.callFunc))
				{
					funcToFile.put(mess.callFunc, mess.callFile);
				}
				else
				{
					if(!funcToFile.get(mess.callFunc).equals(mess.callFile))
					{
						System.out.println(mess.callFile + " " + mess.callFunc);
						throw new Exception("");
					}
				}*/
			}
			int calledID = funcTbl.get(callStack.get(0).callFunc);
			int callID = 0;
			int callLine = 999;
			
			if(callStack.size() > 1)
			{
				callID = funcTbl.get(callStack.get(1).callFunc);
				callLine = callStack.get(1).callLine;
			}
			xcnt[calledID][callID][callLine]++;
			
			//System.out.println(callStack);
		}
		//嗯,没有重名的
		//System.out.println(funcToFile.size());
	}
	
	public void calcXCNT()
	{
		/*for(int i=0; i<funcR.length; i++)
		{
			System.out.println(i + " " + funcR[i]);
		}
		System.out.println("=============================");
		

		for (Entry<String, Integer> entry : funcTbl.entrySet()) 
		{
			System.out.println(entry.getKey() + " " + entry.getValue());
		}
		System.out.println("+++++++++++++++++++++++++++++");*/
		
		int[][] t = new int[180][];
		for(int i=0; i<180; i++)
		{
			t[i] = new int[180];
		}
		int tt[] = new int[180];
		for(int i=0; i<funcTbl.size(); i++)
		{
			//if(funcR[i].equals("page_fault"))continue;
			for(int j=0; j<funcTbl.size(); j++)
			{
				for(int k=0; k<1000; k++)
				{
					t[i][j] += xcnt[i][j][k];
				}
				tt[i] += t[i][j];
			}
		}
		
		StringBuilder build = new StringBuilder();
		build.append("{\n");
		for(int i=1; i<fnameTbl.size(); i++)//i: calledFile
		{
			if(fnameR[i].charAt(fnameR[i].length()-1) == 's')continue;
			build.append('"');
			build.append(fnameR[i]);
			build.append("\":\n{\n");
			for(int j=0; j<funcTbl.size(); j++)//j: calledFunc
			{
				if(funcToFile[j] == i)
				{
					build.append('"');
					build.append(funcR[j]);
					build.append("\":[");
					for(int k=0; k<funcTbl.size(); k++)
					{
						if(t[j][k] > 0)
						{
							build.append("{");
							build.append("\"callFunc\":\"");
							build.append(funcR[k]);
							build.append("\", \"callFile\":\"");
							build.append(fnameR[funcToFile[k]]);
							build.append("\", \"callCnt\":");
							build.append(t[j][k]);
							//build.append()
							build.append("},");
						}
					}
					
					build.append("],\n");
				}
			}
			build.append("},\n");
		}
		build.append("}");
		System.out.println(build.toString());
	}
	
	public void ReadLogFile(File f)
	{
		//String lastPath = getLastPath(f);
		//System.out.println(f.getParentFile().getName() +'\\' +f.getName());
		String tp=null,tp1=null,s;
		try
		{
			BufferedReader br = new BufferedReader(new FileReader(f));
			while((s=br.readLine())!=null)
			{
				if(!s.contains("{"))
					continue;
				//System.out.println(s);
				br.readLine();
				//System.out.println(br.readLine());
				StringBuilder input = new StringBuilder();
				while(s.length() > 0)
				{
					s = br.readLine();//.trim();
					input.append(s);
				}
				StringTokenizer pound_tok = new StringTokenizer(input.toString(),"#");
				//System.out.println("input" +input.toString());
				ArrayList<callMessage> nowCallStack = new ArrayList<>();
				while(pound_tok.hasMoreTokens())
				{
					do {
						tp = pound_tok.nextToken();
						//System.out.println(tp);
						//while(!Character.isDigit(tp.charAt(0)) || tp.charAt(1)!=' ')
						//		tp = pound_tok.nextToken();
					}while(tp.contains("backtrace:"));
					
					//System.out.println(tp);
					//System.out.println("===============");
					StringTokenizer tok = new StringTokenizer(tp," ");
					String callFunc,callFile;
					int callLine;
					if(nowCallStack.isEmpty())
					{
						tok.nextToken();
						callFunc = tok.nextToken();
						
						while(tok.hasMoreTokens())
						{
							tp1 = tok.nextToken();
						}
						//System.out.println("tp1:--"+tp1);
						String[] tps = tp1.split(":");
						callFile = tps[0];
						callLine = Integer.parseInt(tps[1]);
						nowCallStack.add(new callMessage(callFunc,callFile,callLine));
						//nowCallStack.add(new callMessage(callFunc,null,0));
					}
					else
					{
						for(int i=0; i<3; i++)
							tok.nextToken();
						callFunc = tok.nextToken();
						if(callFunc.equals("??"))continue;
						//System.out.println(callFunc);
						while(tok.hasMoreTokens())
						{
							tp1 = tok.nextToken();
						}
						if(tp1.equals("()"))continue;
						//System.out.println(tp);
						String[] tps = tp1.split(":");
						//System.out.println("tp--"+tp1);
						callFile = tps[0];
						callLine = Integer.parseInt(tps[1]);
						nowCallStack.add(new callMessage(callFunc,callFile,callLine));
					}
				}
				//System.out.println(ans.size());
				//System.out.println(nowCallStack);
				ans.add(nowCallStack);
			}
			br.close();
			//System.gc();
		}
		catch(IOException e)
		{
			e.printStackTrace();
		}
		/*catch(Exception e)
		{
			e.printStackTrace();
			return;
		}*/
	}
	public String getLastToken(String str, String delim)
	{
		StringTokenizer tok = new StringTokenizer(str, delim);
		String lastToken = "";
		while(tok.hasMoreTokens())
		{
			lastToken = tok.nextToken();
		}
		return lastToken;
	}

	public void ReadFolder(String path, final int mode) throws Exception
	{
		//System.out.println(path);
		File f = null;
		File[] files = null;
		LinkedList<File> q = new LinkedList<>();
		LinkedList<File> myfiles = new LinkedList<>();
		q.add(new File(path));
		//ArrayList<ArrayList<callMessage>> me = new ArrayList<>();
		while(!q.isEmpty())
		{
			f = q.removeFirst();
			//System.out.println(f.getPath());
			if(f.isDirectory())
			{
				files = f.listFiles();
				for(File t:files)
				{
					if(t.isDirectory())
						q.addLast(t);
					else myfiles.addLast(t);
				}
			}
		}
		while((f=myfiles.pollFirst())!=null)
		{
			//System.out.println(f.getPath());
			switch(mode)
			{
			case 1:
				ans.clear();
				ReadLogFile(f);
				handle();
				break;
			case 2:
				//srcReader srcR = new srcReader();
				//srcR.ReadSourceFile(f);
				break;
			default:
				break;
			}
			
		}
	}
}