import java.io.File;
import java.util.ArrayList;
public class Main 
{
	static final String srcf = "C:\\Users\\SDU\\Documents\\GitHub\\oldlinux-homework\\";
	public static void main(String[] args) 
	{
		//StatReader.ReadFolder(srcf + "data\\gdb_output");
		//ArrayList<ArrayList<callMessage>> ans = StatReader.ReadLogFile(new File("D:\\song\\document\\GitHub\\oldlinux-homework\\data\\gdb_output\\fs\\chardev_c\\a.txt"));
		//System.out.println(ans);
		StatReader.ReadSourceFile(new File(srcf+"0.11\\kernel\\sched.c"));
		
	}

}
