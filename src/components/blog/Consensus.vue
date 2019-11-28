<template>
  <article v-if="allReady" class="post">
    <header class="post__header">
      <h2 class="post__title">{{ title }}</h2>
      <project-headline id="carbon" theme="secondary">
        <template v-slot:header>My Project</template>
        Distributed Ledger
      </project-headline>
    </header>
    <section class="post__body rte">
      <blockquote class="post__subtitle">
        <center>
          <div class="title">Exploring blockchain consensus strategies - a breaking bad spin off</div>
        </center>
      </blockquote>

<p></p>
If you believe the trend predictions, distributed ledger technology (DLT) - a.k.a. blockchain - will completely revolutionize industry and logistics. In an increasingly anonymous world, the math in the blockchain can replace the trust originally put in human actors. Where institutions seem unreliable, DLT offers a secure, decentralized way to interact. Blockchain advocates see potential use cases in almost every area of life and trade.
<p></p>
But DLT is not undisputed. Others criticize it as an unnecessary technology that wastes huge amounts of energy. They say that blockchain applications could also be implemented with conventional technologies like centralized databases or multi-signature-wallets.
<p></p>
To me, the idea seems fascinating because it promises decentral systems where today we have central institutions as a middle man.
<p></p>
But let’s first start with the basics:
First and foremost, a distributed ledger is a data structure. It consists of interconnected blocks. These blocks usually contain the information how crypto tokens were transferred from one person to another. This is called a transaction. The blockchain logs all transactions. That way anybody can backtrace the balance of everybody’s wallet.
On the other hand, it’s impossible to modify the data held inside the ledger. An algorithm - called secure hash function guarantees that. Once a block is modified the whole chain is recognizably not consistent any more.
<p></p>
To give you a Breaking Bad example, Walter White is transferring 10 Bitcoins to Saul Goodman. 
Therefore he signs the transaction with the private key of his crypto-wallet. 
Before transferring the money from Walter’s wallet to Saul’s, we need to make sure that Walter has not spend all his funds on chemotherapy. This is called double-spending.
Since there is no bank to assure that he has enough funds left, the blockchain takes over:
If somebody adds transactions, other participants - called Validators - have to agree and confirm the validity of each transaction. This is called Consensus.
<p></p>
A strategy that keeps the participants from adding invalid transactions is called a Consensus Strategy. There are many different such strategies, but the main ones are:
<p></p>
Proof-of-Work (POW) and Proof-of-Stake (POS). They both have one thing in common: Fraud hurts.
<p></p>
POW came up in 2008 with the work of an unknown person a.k.a Satoshi Nakamoto. To add a transaction in a POW system, the machine must solve a mathematical puzzle. This is called mining and it “costs” a lot of energy in the most literal sense.
<p></p>
The POS strategy is not that energy-hungry. Being as secure as the POW it does not waste as much energy. 
To add a transaction the participant must have some sort of security deposit - also called stake - in his wallet. In our example, if Walter adds a fraudulent transaction, his deposit will be confiscated - as would the deposit of Jesse if he confirmed.
<p></p>
This deposit doesn’t need to be money, but it can be anything of value, such as the reputation of users, i.e. the value of a customer’s rating on Amazon.
<p></p>
Now imagine Walter White’s online shop in the Dark Web. As it is not going that well he buys 1000 positive reviews. When this is discovered, the credibility of every bought reviewer suffers.
They brought in their credibility rate as non-monetary stake. A review from a customer who is known to give accurate ratings will count far more than those of someone caught in fraudulent activities.
The POS consensus is not perfect yet. In fact, as high the stake of a participant as high is his influence in the network itself – which may expose to selfish participation and collusion.
<p></p>
Because I like novel consensus strategies, I contributed in to a startup called a-Qube during my parental leave.
They designed a non-monetary stake for collaborative work. Based on game theory, Walter White, Jesse and Saul rate the value of each other’s work. In the end potential profits will be distributed accordingly. It is important to judge one’s collaborators justly. Whoever votes his colleagues down in order to gain more, will be punished. Their engagement rate - the non-monetary stake they brought in - is diminished.
You can use all kinds of non-monetary stakes, the system is always the same. Imagine Walter White and Jesse disputing whether the cocaine or the crystal meth biz is more profitable. In a-Qube’s consensus the darknet community will vote about which way they should go. The voters will get measured by how accurate they predicted the success of previous business ideas. They bring in their their prediction accuracy as non-monetary stake.
<p></p>
a-Qube's white paper describes a brand-new voting mechanism to solve this class of problems.
It uses Game Theory to prevent fraud and collusion. The voting is implemented on a distributed ledger, which can be a blockchain or a non-linear structure like Hedera’s Hashgraph.
A-Qube’s concept is unique and novel. And it aims to become a standard in the compensation of collaborative work.

   </section>
  </article>
</template>

 <script>
import VueDisqus from "vue-disqus/VueDisqus";
import { scrollTo, kebabify, prettyDate } from "@/utils/helpers";
export default {
  resource: "BlogPost",
  components: { VueDisqus},
  props: { post: String },
  data() {
    return {
      panel: [false],
      title: "",
      author: "Veit Wehner",
      content: "",
      published: "2019-11-24T18:17:01Z",
      description:
        "A suite of Machine Learning models for aiding air traffic controllers.",
      commentsReady: false,
      ready: true
    };
  },
  computed: {
    allReady() {
      return this.ready && "consensus" === this.post;
    }
  },
  methods: {
    kebabify,
    prettyDate
  },
  mounted() {
    if (!this.post) {
      this.ready = true;
      return;
    }
    this.$getResource("post", this.post)
      .then(this.showComments)
      .then(() => {
        this.ready = true;
      });
  }
};
</script>
