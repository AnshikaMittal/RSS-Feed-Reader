import java.util.*;

class string_sorting
{
    public static void main (String[] args) throws java.lang.Exception
    {
   
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the no of string you wish to enter");
        int n = sc.nextInt();
        String k=sc.nextLine();
        String[] s = new String[n];
        String temp;
        System.out.println("Enter the strings");
        for(int i=0;i<n;i++)
        {
            s[i] = sc.nextLine();
        }
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n-1-i;j++)
            {
                if(s[j].length()>s[j+1].length() )
                {
                    temp = s[j];
                    s[j]=s[j+1];
                    s[j+1] = temp;
                }
            }
        }
        System.out.println("Strings sorted according to length : ");
        for(int i=0;i<n;i++)
        {
            System.out.println(s[i]);
        }
        sc.close();
      
 
    }
}