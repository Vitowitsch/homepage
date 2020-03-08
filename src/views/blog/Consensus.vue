<template>
  <v-container>
    <project-headline id="carbon" theme="secondary">
      <template v-slot:header>My Project</template>
      Exploring Blockchain-Consensus-Strategies
    </project-headline>
      <blockquote class="post__subtitle">
        <center>
          <div
            class="title"
          >Blockchain got famous through Bitcoin and infamous through the energy-wasting mining farms. Meanwhile novel Blockchain projects were introduced proposing new solutions.</div>
        </center>
      </blockquote>
      <br>
      <v-row>
      <v-col cols="12" sm="6">
      If you believe the trend predictions, blockchain - and distributed ledger technology (DLT) in general - will completely revolutionize industry and logistics. In an increasingly anonymous world, the math in the blockchain can replace the trust originally put in human actors. Where institutions seem unreliable, DLT offers a secure, decentralized way to interact. Blockchain advocates see potential use cases in almost every area of life and trade.
      <p></p>But DLT is not undisputed. Others criticize it as an unnecessary technology which wastes huge amounts of energy. They say that blockchain applications could also be implemented with conventional technologies like centralized databases or multi-signature-wallets.
      <p></p>To me, the idea seems fascinating because it promises decentralized systems where today we have central institutions as a middle man.
      <p></p>But let’s first start with the basics:
      <br />First and foremost, a distributed ledger is a data structure. It consists of consecutive blocks. These blocks usually contain the information how crypto tokens were transferred from one person to another. This is calledcalled a transaction. The blockchain stores all transactions permanently and tamper-proof. That way anybody can backtrace the balance of everybody’s wallet.
      <p></p>To give you an example: Imagine Walter White from Breaking Bad transferring 10 Bitcoins to his lawyer Saul Goodman. To do this, he signs a transaction with the private key of his crypto-wallet. Now we need to make sure that Walter is not double spending: As there is no bank to assure that he has not spent all his funds on chemotherapy, the blockchain takes over. If somebody adds transactions, other participants - called Validators - must agree and confirm the validity of each transaction. This is called Consensus. If the validators do not agree, the consensus cannot be reached and the transaction won’t be added to the ledger.
      <p></p>A mechanism that keeps participants from adding invalid transactions is called a Consensus Strategy. There are many different such strategies, Proof-of-Work (POW) and Proof-of-Stake (POS) being the most important. They both have one thing in common: Fraud hurts. Adding invalid transactions has a price.
      <p></p>Proof-of-Work first appeared in 2008 with the work of an unknown person or group going by the name of Satoshi Nakamoto. To add a transaction in a POW system, the machine must solve a complicated mathematical puzzle. This so-called mining costs a lot of computing power, money and energy.
      </v-col>
      
      <v-col cols="12" sm="6">
      The waste of energy has often been criticized. The most important alternative is the Proof-of-Stake strategy. Being as secure as the POW it does not waste as much energy. To add transactions participants must have some sort of security deposit - also called stake - in their wallet. In our example, if Walter added a fraudulent transaction, his deposit is at stake - as is Jesse's if he confirmed.
      <p></p>The deposit in a POS-system doesn’t need to be money, but it can be anything of value, such as the participant’s reputation. Imagine Walter White’s online shop in the Dark Web. To promote it he buys 1000 positive reviews. When this is discovered, the credibility of Walter suffers as does the credibility of everyone who gave a false review, as they brought in their credibility rate as non-monetary stake. A review from a customer who is known to give accurate ratings will count far more than those of someone caught in fraudulent activities.
      <p></p>The POS consensus is not perfect yet. The system still needs to prove itself in respect to security. In terms of transaction speed and energy consumption they are already superior to POW.
      <p></p>I find those novel consensus strategies very interesting. During my parental leave I contributed to a startup named a-Qube. They designed a non-monetary stake for collaborative work, with game theory and predictive guesses.
      <p></p>Walter, Jesse and Saul could use this system to rate the value of their individual contributions to distribute potential profits accordingly. Consensus strategy and game theory guarantee a fair evaluation: If someone votes his colleagues down to raise his own profits, he will be punished. His engagement rate - the non-monetary stake he brought in - is diminished.
      <p></p>You can use all kinds of non-monetary stakes, the system is always the same:
      <br />Imagine Walter White and Jesse disputing whether the cocaine or the crystal meth biz is more profitable. In a-Qube’s consensus the darknet community would vote about which way they should go. Each voter will be measured based on how valuable and accurate their prediction was. They bring in the accuracy of their previous predictions as non-monetary stake.
      <p></p>In their white paper and this
      <a
        href="https://medium.com/a-qube/introducing-qps-a-consensus-model-for-real-world-collaborative-networks-b7ba0467d60c"
      >article</a> a-Qube describes a new voting mechanism to solve this class of problems. The voting is implemented on a distributed ledger, which can be a blockchain or a non-linear structure like a Hashgraph.
      <p></p>The idea of fair collaboration is fascinating for the open source community. Especially if you do not know if a project will later be profitable, it offers an option for all contributors to participate in potential earnings.
      </v-col></v-row>
  </v-container>
</template>

