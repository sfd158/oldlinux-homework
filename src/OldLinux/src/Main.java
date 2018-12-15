import java.io.File;
import java.util.ArrayList;

public class Main 
{
	static final String srcf = "D:\\song\\document\\GitHub\\oldlinux-homework\\html\\",
	//fpath = "D:\\song\\document\\GitHub\\oldlinux-homework\\data\\gdb_output\\fs\\";
	fpath = "D:\\song\\document\\GitHub\\oldlinux-homework\\data\\gdb_output\\";
	public static void main(String[] args) throws Exception 
	{
		//StatReader.ReadFolder(srcf + "data\\gdb_output");
		StatReader stat = new StatReader();
		stat.ReadFolder(fpath,1);
		//System.out.println(stat.fnameTbl.size());
		stat.calcXCNT();
		//System.out.println(stat.funcToFile.size());
		//stat.handle();
		//System.out.println(ans);
		
		
		//srcReader srcR = new srcReader(srcf+"0.11\\mm\\memory.c", false);
		//System.out.println(srcR.outputStr());
	}

}
