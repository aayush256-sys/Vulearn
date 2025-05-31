import { Shield, Lock, Key, Code, Globe } from "lucide-react";

type LabsType = {
  title: string;
  icon: JSX.Element;
  description: string;
  link: string;
  color: string; // bgg color for hover
  hoverColor: string; // hover border and text color
};

const Labs = () => {
  const labActivities: LabsType[] = [
    {
      title: "Broken Access Control",
      description:
        "Learn how attackers exploit improper access controls to gain unauthorized access to sensitive data or functionalities. Understand techniques to mitigate these risks and implement robust controls.",
      link: "/learn/labs/broken-access-control",
      icon: <Shield className="w-8 h-8 text-pink-500" />,
      color: "bg-red-100",
      hoverColor: "hover:border-pink-500 hover:text-pink-500",
    },
    {
      title: "Broken Authentication",
      description:
        "Dive into vulnerabilities in authentication mechanisms that allow attackers to impersonate users. Discover common pitfalls like weak passwords and improper session management, and how to avoid them.",
      link: "/learn/labs/broken-auth",
      icon: <Lock className="w-8 h-8 text-yellow-500" />,
      color: "bg-yellow-100",
      hoverColor: "hover:border-yellow-500 hover:text-yellow-500",
    },
    {
      title: "Injection Attacks",
      description:
        "Understand how attackers exploit injection vulnerabilities like SQL injection or XSS to execute malicious code. Learn preventive measures, such as input validation and prepared statements.",
      link: "/learn/labs/injection",
      icon: <Code className="w-8 h-8 text-orange-500" />,
      color: "bg-blue-100",
      hoverColor: "hover:border-blue-500 hover:text-blue-500",
    },
    {
      title: "Server-Side Request Forgery (SSRF)",
      description:
        "Learn how attackers exploit SSRF vulnerabilities to trick servers into making unauthorized requests. Explore techniques to prevent SSRF, including input validation and network restrictions.",
      link: "/learn/labs/ssrf",
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-100",
      hoverColor: "hover:border-purple-500 hover:text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
            Labs & Workshop
          </h1>
          <p className="text-xl font-lato text-gray-600 max-w-3xl mx-auto">
            Hands-on exercises to master web security vulnerabilities and protection techniques.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {labActivities.map((activity, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl shadow-lg p-8 transition-all duration-300 ${activity.color} ${activity.hoverColor}`}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 rounded-lg p-3">{activity.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 font-mono mb-6">{activity.description}</p>
                  <a
                    href={activity.link}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent text-orange-500 font-medium rounded-lg hover:bg-transparent hover:border-current hover:text-current transition-all duration-300"
                  >
                    View Topics
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labs;
