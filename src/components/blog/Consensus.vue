<template>
  <article v-if="allReady" class="post">
    <header class="post__header">
      <h2 class="post__title">{{ title }}</h2>
      <h3 class="post__meta">
        <span class="post__sep"></span>
        <time>{{ prettyDate(published) }}</time>
      </h3>
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
But DLT is not undisputed. Others criticize it as an unnecessary technology that wastes huge amounts of energy. They say that blockchain applications could also be implemented with conventional technologies like centralized databases or multi-signature-wallets.
<p></p>
To me, the idea seems fascinating because it promises decentral systems where today we have central institutions as a middle man.
<p></p>
But let’s first start with the basics:
First and foremost, a distributed ledger is a data structure. It consists of interconnected blocks. These blocks usually contain the information how crypto tokens were transferred from one person to another. This is called a transaction. The blockchain logs all transactions. That way anybody can backtrace the balance of everybody’s wallet. 
To give you an example, Walther White is transferring 10 Bitcoins to Saul Goodman. Before transferring the money from Walther’s wallet and adding it to Saul’s, we need to assert that Walther has not spend all his funds on chemotherapy. Since there is no bank to assure that he has enough funds left, the blockchain takes over. If somebody adds a transaction, other participants of the DLT have to agree - this is called consensus.
<p></p>
To prevent abuse, all consensus strategies have one thing in common: Fraud hurts. There are two main strategies to secure this: Proof-of-Work (POW) and Proof-of-Stake (POS). Both prevent the chain to be spammed by invalid transactions, even if this would be detected by the consensus itself.
<p></p>
POW came up in 2008 by an unknown person a.k.a Satoshi Nakamoto. To add a transaction in a POW system, the computer must solve a mathematical puzzle. This is called mining and it “costs” a lot of energy in the most literal sense. The other participants can easily verify that the puzzle was solved correctly.
<p></p>
The POS strategy is not that energy-hungry. To add a transaction the participant must have some sort of security deposit - also called stake - in his wallet. If Walther adds a fraudulent transaction, his deposit will be confiscated - as would the deposit of Jesse if he confirmed.
<p></p>
This deposit doesn’t need to be money, but it can be anything of value, e.g. the value of a customer’s rating on Amazon. 
<p></p>
Now image Walther White’s online shop in the Darknet. As it is not going that well he buys 1000 positive reviews. When this is discovered, the credibility of every bought reviewer suffers.
They brought in their credibility rate as non-monetary stake. A review from a customer who is known to give accurate ratings will count far more than those of someone caught in fraudulent activities.
<p></p>
The POS system is as secure as the POW system but does not waste as much energy.
<p></p>
Because I like novel consensus strategies, I participated in a startup called a-quibe.io during my parental leave. They also work with a non-monetary stake for collaborative work. Based on game theory, Walther White, Jesse and Saul rate the value of each other’s work. In the end potential profits will be distributed accordingly. It is important to judge one’s collaborators justly. Whoever votes his colleagues down in order to gain more, will be punished. Their engagement rate - the non-monetary stake they brought in - is diminished.
<p></p>
You can use all kinds of non-monetary stakes, the system is always the same. Imagine Walther White and Jesse disputing whether the cocaine or the crystal meth biz is more profitable. The darknet community shall vote about which way they should go. The voters will get measured by how accurate they predicted the success of previous business ideas. They bring in their their prediction accuracy as non-monetary stake.
<p></p>
A-Qube's white paper describes a voting mechanism to solve this class of problems.
It uses Game Theory to prevent fraud and collusion. The voting is implemented on a distributed ledger, which can be a blockchain or a non-linear structure like Hedera’s Hashgraph.
<p></p>
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
