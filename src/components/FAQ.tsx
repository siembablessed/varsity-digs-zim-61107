import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does VarsityDigs verify property listings?",
      answer: "We verify every property listing through multiple steps: property owner identity verification, photo verification, lease document checks, and regular property inspections. All owners must provide government-issued ID and proof of property ownership."
    },
    {
      question: "Is there a fee for students to use VarsityDigs?",
      answer: "Students can use VarsityDigs completely free with our Basic plan, which includes browsing properties, saving favorites, and contacting owners. Our Premium plan offers additional features like roommate matching and priority support for $9.99/month."
    },
    {
      question: "How do I schedule a property viewing?",
      answer: "Once you find a property you're interested in, click 'View Details' and then 'Send Inquiry' to contact the property owner directly. Many listings also offer virtual tours that you can access immediately."
    },
    {
      question: "What if I have issues with a property or landlord?",
      answer: "VarsityDigs provides 24/7 support for all users. We also have a dispute resolution process and work closely with local housing authorities to ensure fair treatment. Premium users get priority support with dedicated account managers."
    },
    {
      question: "Can I list multiple properties as an owner?",
      answer: "Yes! Property owners can list unlimited properties with our Property Owner plan ($29.99/month). This includes professional photo hosting, tenant screening tools, and application management features."
    },
    {
      question: "How does the roommate matching feature work?",
      answer: "Our AI-powered roommate matching (available in Premium) analyzes lifestyle preferences, study habits, cleanliness levels, and social preferences to suggest compatible roommates. You can also browse profiles and connect directly."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, and bank transfers. For property owners, we also integrate with popular property management software for seamless rent collection."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use bank-level encryption to protect your data and never share personal information without your explicit consent. We're FERPA compliant and follow all data protection regulations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? 
            Our support team is here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="overflow-hidden animate-fade-in transition-all duration-200 hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-accent/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openFAQ === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our support team is available 24/7 to help you with any questions or concerns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Live Chat
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Support
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;