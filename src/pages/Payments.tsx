import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  Download, 
  Receipt, 
  Calendar,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Clock,
  RefreshCw,
  Search,
  Filter,
  FileText,
  ArrowUpRight,
  Building
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Payments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const paymentHistory = [
    {
      id: "PAY-001",
      description: "React Advanced Certification",
      amount: 299.00,
      status: "completed",
      date: "2024-01-15",
      method: "Credit Card (**** 4242)",
      transactionId: "txn_1234567890",
      invoiceNumber: "INV-2024-001",
      provider: "Tech Academy"
    },
    {
      id: "PAY-002",
      description: "AWS Cloud Practitioner",
      amount: 149.00,
      status: "completed",
      date: "2024-01-05",
      method: "PayPal",
      transactionId: "txn_0987654321",
      invoiceNumber: "INV-2024-002",
      provider: "Amazon Web Services"
    },
    {
      id: "PAY-003",
      description: "JavaScript Fundamentals",
      amount: 99.00,
      status: "completed",
      date: "2023-11-15",
      method: "Credit Card (**** 1234)",
      transactionId: "txn_1122334455",
      invoiceNumber: "INV-2023-015",
      provider: "Code Academy"
    },
    {
      id: "PAY-004",
      description: "Data Science with Python",
      amount: 449.00,
      status: "pending",
      date: "2024-01-20",
      method: "Bank Transfer",
      transactionId: "txn_pending_001",
      invoiceNumber: "INV-2024-003",
      provider: "Data Academy"
    },
    {
      id: "PAY-005",
      description: "UI/UX Design Fundamentals",
      amount: 349.00,
      status: "failed",
      date: "2024-01-18",
      method: "Credit Card (**** 5678)",
      transactionId: "txn_failed_001",
      invoiceNumber: "INV-2024-004",
      provider: "Design School"
    }
  ];

  const upcomingPayments = [
    {
      id: "UP-001",
      description: "Full Stack JavaScript Developer",
      amount: 599.00,
      dueDate: "2024-02-01",
      status: "scheduled",
      method: "Credit Card (**** 4242)",
      provider: "Code Institute"
    },
    {
      id: "UP-002",
      description: "Digital Marketing Professional",
      amount: 199.00,
      dueDate: "2024-02-15",
      status: "scheduled",
      method: "PayPal",
      provider: "Marketing Pro"
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Credit Card",
      last4: "4242",
      brand: "Visa",
      expiryMonth: 12,
      expiryYear: 2026,
      isDefault: true
    },
    {
      id: 2,
      type: "Credit Card",
      last4: "1234",
      brand: "Mastercard",
      expiryMonth: 8,
      expiryYear: 2025,
      isDefault: false
    },
    {
      id: 3,
      type: "PayPal",
      email: "john.doe@email.com",
      isDefault: false
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { color: "bg-green-100 text-green-800", icon: <CheckCircle className="w-3 h-3 mr-1" />, label: "Completed" },
      pending: { color: "bg-yellow-100 text-yellow-800", icon: <Clock className="w-3 h-3 mr-1" />, label: "Pending" },
      failed: { color: "bg-red-100 text-red-800", icon: <AlertCircle className="w-3 h-3 mr-1" />, label: "Failed" },
      scheduled: { color: "bg-blue-100 text-blue-800", icon: <Calendar className="w-3 h-3 mr-1" />, label: "Scheduled" },
      refunded: { color: "bg-gray-100 text-gray-800", icon: <RefreshCw className="w-3 h-3 mr-1" />, label: "Refunded" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.completed;
    return (
      <Badge className={config.color}>
        {config.icon}
        {config.label}
      </Badge>
    );
  };

  const handleDownloadInvoice = (payment: any) => {
    toast({
      title: "Downloading Invoice",
      description: `Invoice ${payment.invoiceNumber} is being downloaded.`,
    });
  };

  const handleRetryPayment = (payment: any) => {
    toast({
      title: "Retrying Payment",
      description: `Retrying payment for ${payment.description}.`,
    });
  };

  const filteredPayments = paymentHistory.filter(payment =>
    payment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalSpent = paymentHistory
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = paymentHistory
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Payments & Billing</h1>
          <p className="text-muted-foreground">
            Manage your payments, invoices, and billing information
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Total Spent</h3>
                <p className="text-2xl font-bold text-foreground">${totalSpent.toFixed(2)}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Pending</h3>
                <p className="text-2xl font-bold text-foreground">${pendingAmount.toFixed(2)}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Receipt className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Invoices</h3>
                <p className="text-2xl font-bold text-foreground">{paymentHistory.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Payment Methods</h3>
                <p className="text-2xl font-bold text-foreground">{paymentMethods.length}</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-96">
            <TabsTrigger value="history">Payment History</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="mt-8">
            {/* Search and Filters */}
            <Card className="p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search payments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </Card>

            {/* Payment History */}
            <div className="space-y-4">
              {filteredPayments.map((payment) => (
                <Card key={payment.id} className="p-6 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{payment.description}</h3>
                        {getStatusBadge(payment.status)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {payment.provider}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(payment.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <CreditCard className="w-4 h-4 mr-1" />
                          {payment.method}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Transaction ID: {payment.transactionId}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground mb-2">
                        ${payment.amount.toFixed(2)}
                      </div>
                      <div className="flex items-center space-x-2">
                        {payment.status === 'failed' ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRetryPayment(payment)}
                          >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Retry
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownloadInvoice(payment)}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Invoice
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Invoice: {payment.invoiceNumber}
                      </span>
                      <Button variant="ghost" size="sm">
                        View Details
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-8">
            <div className="space-y-4">
              {upcomingPayments.map((payment) => (
                <Card key={payment.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{payment.description}</h3>
                        {getStatusBadge(payment.status)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {payment.provider}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Due: {new Date(payment.dueDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <CreditCard className="w-4 h-4 mr-1" />
                          {payment.method}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground mb-2">
                        ${payment.amount.toFixed(2)}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          Modify
                        </Button>
                        <Button size="sm" className="btn-hero">
                          Pay Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {upcomingPayments.length === 0 && (
                <Card className="p-12 text-center">
                  <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No Upcoming Payments
                  </h3>
                  <p className="text-muted-foreground">
                    You don't have any scheduled payments at the moment.
                  </p>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="methods" className="mt-8">
            <div className="space-y-4 mb-6">
              {paymentMethods.map((method) => (
                <Card key={method.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        {method.type === 'Credit Card' ? (
                          <>
                            <h3 className="font-semibold text-foreground">
                              {method.brand} ending in {method.last4}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Expires {method.expiryMonth}/{method.expiryYear}
                            </p>
                          </>
                        ) : (
                          <>
                            <h3 className="font-semibold text-foreground">PayPal</h3>
                            <p className="text-sm text-muted-foreground">{method.email}</p>
                          </>
                        )}
                        {method.isDefault && (
                          <Badge className="mt-1 bg-green-100 text-green-800">Default</Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {!method.isDefault && (
                        <Button size="sm" variant="outline">
                          Set Default
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 border-dashed border-2 border-border">
              <div className="text-center">
                <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Add New Payment Method
                </h3>
                <p className="text-muted-foreground mb-4">
                  Add a credit card or PayPal account for faster checkout
                </p>
                <Button className="btn-hero">
                  Add Payment Method
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Payments;