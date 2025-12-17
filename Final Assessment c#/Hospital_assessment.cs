using System;

public delegate double BillingDelegate(double amount);
public delegate void HospitalEvent(string message);

class Patient
{
    private int id;
    private string name;
    private int age;

    public void setId(int id)
    {
        this.id = id;
    }

    public int getId()
    {
        return id;
    }

    public void setName(string name)
    {
        this.name = name;
    }

    public string getName()
    {
        return name;
    }

    public void setAge(int age)
    {
        this.age = age;
    }

    public int getAge()
    {
        return age;
    }

    public Patient(int id, string name, int age)
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class PatientType : Patient
{
    public string Type;

    public PatientType(int id, string name, int age, string type)
        : base(id, name, age)
    {
        this.Type = type;
    }

    public double GetBaseAmount()
    {
        switch (Type)
        {
            case "OPD": return 500;
            case "IPD": return 3000;
            case "GENERAL": return 2000;
            case "EMERGENCY": return 7000;
            case "ICU": return 10000;
            default: return 0;
        }
    }
}

class Billing : PatientType
{
    public event HospitalEvent OnNotify;

    public Billing(int id, string name, int age, string type)
        : base(id, name, age, type)
    {
    }

    public double CalculateBill(BillingDelegate billLogic)
    {
        if (OnNotify != null)
        {
            OnNotify(Type + " Department Notified");
        }

        return billLogic(GetBaseAmount());
    }
}

class Program
{
    static double Normal(double amt)
    {
        return amt;
    }

    static double Emergency(double amt)
    {
        return amt * 1.2;
    }

    static void Main()
    {
        Console.WriteLine("\nWelcome To Hospital Management System\n");

        Console.Write("Enter Patient Id: ");
        int id = int.Parse(Console.ReadLine());

        Console.Write("Enter Patient Name: ");
        string name = Console.ReadLine();

        Console.Write("Enter Patient Age: ");
        int age = int.Parse(Console.ReadLine());

        Console.WriteLine("\nChoose Patient Type");
        Console.WriteLine("1. OPD");
        Console.WriteLine("2. IPD");
        Console.WriteLine("3. GENERAL");
        Console.WriteLine("4. EMERGENCY");
        Console.WriteLine("5. ICU");

        string choice = Console.ReadLine();
        string type = "";

        switch (choice)
        {
            case "1": type = "OPD"; break;
            case "2": type = "IPD"; break;
            case "3": type = "GENERAL"; break;
            case "4": type = "EMERGENCY"; break;
            case "5": type = "ICU"; break;
            default:
                Console.WriteLine("Invalid Choice");
                return;
        }

        Billing bill = new Billing(id, name, age, type);

        bill.OnNotify += msg =>
        {
            Console.WriteLine("Notification: " + msg);
        };

        BillingDelegate logic =
            type == "EMERGENCY" ? Emergency : Normal;

        double finalAmount = bill.CalculateBill(logic);

        Console.WriteLine("\nBill Details");
        Console.WriteLine("Patient Name : " + bill.getName());
        Console.WriteLine("Patient Type : " + bill.Type);
        Console.WriteLine("Total Amount : ₹" + finalAmount);
    }
}
