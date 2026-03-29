// Mapping of technology names to devicon icon identifiers
// CDN: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/

const techIcons: Record<string, string> = {
  // Cloud
  "AWS EC2": "amazonwebservices",
  "S3": "amazonwebservices",
  "IAM": "amazonwebservices",
  "VPC": "amazonwebservices",
  "Lambda": "amazonwebservices",
  "EKS": "amazonwebservices",
  "ECS": "amazonwebservices",
  "GCP": "googlecloud",
  "AWS": "amazonwebservices",

  // DevOps
  "Terraform": "terraform",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "Helm": "helm",
  "Jenkins": "jenkins",
  "GitHub Actions": "github",
  "GitLab CI": "gitlab",

  // Monitoring
  "Prometheus": "prometheus",
  "Grafana": "grafana",
  "ELK Stack": "elasticsearch",
  "Splunk": "splunk",

  // Scripting
  "Python (Boto3)": "python",
  "Bash": "bash",

  // Networking
  "NGINX": "nginx",
  "Load Balancers": "amazonwebservices",
  "DNS": "amazonwebservices",
  "Security Groups": "amazonwebservices",

  // Extra
  "CI/CD": "githubactions",
  "Load Balancing": "amazonwebservices",
  "RDS": "amazonwebservices",
  "SSL": "letsencrypt",
  "Monitoring": "grafana",
};

export const getDevIconUrl = (tech: string, theme: "dark" | "light" = "dark"): string => {
  const slug = techIcons[tech];
  if (!slug) return "";
  if (slug === "amazonwebservices") {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`;
  }
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;
};

export const getDevIconUrlWordmark = (tech: string): string => {
  const slug = techIcons[tech];
  if (!slug) return "";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original-wordmark.svg`;
};

export default techIcons;
