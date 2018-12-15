
public class callMessage 
{
	public final String callFunc;
	public String callFile;
	public final int callLine;
	public callMessage(final String _callFunc, final String _callFile, final int _callLine)
	{
		callFunc = _callFunc;
		callFile = _callFile;
		callLine = _callLine;
	}
	@Override
	public String toString()
	{
		return "CallFunc:" + callFunc + ",CallFile:" + callFile + ",CallLine:" + callLine;
	}
}
