<template>
  <div id="cv" class="ml-5">
   
    <v-timeline :dense="dense">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        color="blue-grey"
        small
      >
        <span :class="['text-h6']" v-text="item.year"></span>
        <h2 :class="['text-h6', 'teal--text']">{{ item.title }}</h2>
        <p></p>
        <div :class="['text-subtitle-2']">{{ item.text }}</div>
        <p></p>
        <div>{{ item.technologies }}</div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>

export default {
  computed: {
    dense() {
      return this.$vuetify.display.xsOnly;
    }
  },
  data: () => ({
    items: [
      {
        color: "#b6b7ba",
        year: "today",
        text: "AWS Infrastructure",
        technologies:
          "Technologies: AWS CDK, Terraform, Typescript, Event Driven Architectures",
        title: "System Architect (for Cariad)",
      },
      {
        color: "#b6b7ba",
        year: "2023",
        text: "Special Purpose Machines",
        technologies:
          "Technologies: Python, Kotlin, Quarkus, Vue.js, G Code, OpenCV, YoloV5, FastAPI, RabbitMQ, MQTT, FastAPI, Kubernetes, Gitlab",
        title: "Technical Lead (for bcmsolutions)",
      },
      {
        color: "#b6b7ba",
        year: "2022 - 2023",
        title: "Software Architect: Security (for Siemens)",
        text: "Software Architect for Public-Key-Infrastructure automation",
        technologies:
          "Technologies: Kotlin, Spring-Boot, BouncyCastle, CMP, Cloudformation, ECS over Fargate, GitLab, TravisCI, ShellSpec, Testcontainers, Kanban, SAFe",
      },
      {
        color: "#b6b7ba",
        year: "2021 - 2022",
        text: "Data-Scientist / Machine-Learning Engineer Predictive Maintenance",
        technologies:
          "Technologies: MLFlow, Python, AWS Sagemaker, Jupyter, PCA, Neural Networks, Times Series Analyis, Anomaly Detection",
        title: "Software Architect: AI application lifecycle (for Siemens)",
      },
      {
        color: "#b6b7ba",
        year: "2020 - today",
        text: "Mentor for Softwarearchitecture of the Digital-Excellence-Program within the Siemens Expert House.",
        technologies: "",
        title: "Supervisor",
      },
      {
        color: "#b6b7ba",
        year: "2020",
        text: "Certified-Software-Architect (ISAQB)",
        technologies: "",
        title: "Certification",
      },
      {
        color: "#b6b7ba",
        year: "2019",
        text: "Predicting Spare part failures using NLP",
        technologies: "Technologies: Python, NLP",
        title: "AI Engineer at Siemens",
      },
      {
        color: "#b6b7ba",
        year: "2017 - 2018",
        title: "Software Architect at Siemens: Blockchain",
        text: "Consulting on various Blockchain and ICO projects.",
        technologies: "Hyperledger, Ethereum, Solidity",
      },
      {
        color: "#b6b7ba",
        year: "2018 - 2020",
        title: "Intrapreneurs-Sponsorship at Siemens",
        text: "Foundation member of sponsorship project for Train-Safety",
        technologies: "Computer Vision, Fast Fourier Transformation",
      },
      {
        color: "#b6b7ba",
        year: "2017 - 2020",
        title:
          "Software-Architect at Siemens - Machine-Learning, Big Data and Cloud",
        text: "Integration of data-intense Matlab-Algorithms as Docker-Container into Amazon-AWS",
        technologies:
          "Technologies: MLFlow, Kubernetes, EKS, AWS-Lambda, GitLab, Python, Machine-Learning, Statistical Learning, Neural Networks, Bayes Analysis, Markov Models, MatLab, SimuLink, Docker, Hive, Athena, Presto, Data Warehouse, Apache Spark, ETL, Hadoop, Spotfire, EMR, AWS Lambda,Cassandra, Liquibase, Vue.js, Typescript, Javascript, GraphQL,OData, Angular, Scrum, Kanban, Microservices, Self-Contained Systems, Knowledge Graphs, Apache Kafka, Rabbit MQ, SQS, SNS, IPython (JupyterLab), SciKit Learn, Theano, MLib, Tensorflow, Pandas, Numpy, R, AWS Sagemaker",
      },
      {
        color: "#b6b7ba",
        year: "2015 - 2017",
        title: "Software Architect at Siemens: Cloud and Big Data",
        text: "Migration of on-premise applications into Amazon Cloud",
        technologies:
          "Technologies: Java, Python, Spring-Boot, Beanstalk, EC2, MongoDB, DynamoDB, Redis, Kinesis, Graphana, Kibana, Banana, Prometheus, MariaDB, Jenkins, Travis-CI (GitLab)",
      },
      {
        color: "#b6b7ba",
        year: "2011 - 2015",
        title:
          "Software Architect at Siemens: Embedded Systems, Connectivity, Web Applications",
        text: "Shore-side connectivity of a train-sided embedded linux system to analyze train data",
        technologies:
          "Technologies: Java, Facelets, Primefaces, C/C++, cmake, Jenkins",
      },

      {
        color: "#b6b7ba",
        year: "2009 - 2010",
        title: "Embedded-Developer at Siemens",
        text: "GPS based door opening recommendation system on an embedded Linux system",
        technologies: "Technologies: C/C++, cmake, Jenkins",
      },
      {
        color: "#b6b7ba",
        year: "2007 - 2009",
        title: "Software Developer at Siemens",
        text: 'Distributed real-time service to annotate PDF documents - awarded as "Most-Popular-Feature with the Process-Optimization-Toolchain"',
        technologies: "Technologies: C#, C++",
      },
      {
        color: "#b6b7ba",
        year: "2007",
        text: "Master in Computer Science (major), Mathematics (minor) at University of Würzburg. Thesis about Remote-Control in Sensor-Networks",
        title: "Master's Degree",
        technologies: "Technologies: C, assembler",
      },
    ],
    stages: [],
    interval: null,
    slidingIdx: 0,
  }),
};
</script>

<style scoped>
.routerlink {
  color: blue;
  font-weight: normal;
}
</style>
