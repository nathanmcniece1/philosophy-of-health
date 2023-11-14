import React from 'react';
import styles from './Framing.module.css'
import Footer from '../components/Footer/Footer';

function Framing() {
  return (
    <>
    <main className={styles.container}>
        <div className={styles.box}>
        <h3 className={styles.preface}>Framing the Problem</h3>
      <p className={styles.content}>
      Health is one of these awfully intuitive concepts we tend to take for granted. We know it when we see it, and, more saliently, we know it when we don’t. Indeed, so intuitive is the phenomenon of health that we rarely think about what it actually is, in any kind of substantive way. When pressed to define it, what was intuitive to the point of banal becomes awfully hard to pin down. To demonstrate, let us get at the matter with a simple thought experiment. Picture two physiological identical individuals — identitical down to the atom. Now let’s imagine that one of these twins takes an ice bath, while the other eats a burger on the couch. Imagine further that throughout this experiment we’re monitoring every physiological process that’s taking place while both our subjects are doing their respective things. And, for the sake of our thought experiment, imagine that what we have at our disposal is something of a “completed” science of biology — that is, all the tools and techniques, insight at every scale from atoms to organ systems; the highest resolution map of their physiology conceivable. Of course, having performed their respective actions, these physiological twins are no longer identical. They have diverged physiologically. Now consider, which of the two individuals is now healthier? Since they are no longer the same, and if health is a matter of physiology, by definition they can’t be equally healthy. That would obviously defy logic. So what, then, can we point to, in terms of their respective physiology, to substantiate our claim either way? If we seek to claim the person who’s just had an ice bath is now healthier, what is it, physiologically speaking, that has occurred? And what is it exactly makes this new configuration of atoms “healthier”? That is to say, what does it ‘give us’ such that we might now consider it, in some objective sense, “better”?<br></br><br></br>

Faced with these questions, one might look to assert the myriad of physiological state changes that both subjects have undergone in order to provide a respectable answer. For instance, an intuitive answer might look something like this: “The subject who had the ice bath is now healthier because the cold water exposure altered their brain chemistry in X and Y ways, lowered inflammation” etc. Yet this answer is ultimately circular. It takes for granted that said changes are healthier. It merely describes what we already consider healthier in terms of the langugae of physiology. It amounts to the following: “Person A is healthier because such and such changes took place” But what actually is it about such and such changes that makes them healthier? That is, by what standard do we judge the healthy-ness of any given physiological state? <br></br><br></br>


While it is, in some sense, physiology all the way down, there is nothing inherent to the physiology of a given organism that we can point to in order to assert its health. We can speak to the physiological correlates of health, or the physiological substrate of health, but the fundamental characteristics of health are not in themselves physiological. Rather, they’re emergent properties — both phenomenological and functional — of physiology. A given physiological state is healthier than another for what it gives rise to, in terms of the organism’s phenomenology and/or behaviour (or more abstractly, potential behaviour). Accordingly, although physiology is the basis of health, health is not a purely physiological concept. It is equally a philosophical concept, having to do with what we value and what we ought to value. <br></br><br></br>


However, this does not mean that health is a subjective phenomenon, at least not in the popular sense of that term (i.e. subjective = matter of opinion). It is subjective, in the sense that it is inexorably related to the subjective experience of organisms, but not subjective in the “that’s just your opinion” sense. Ultimately, health is grounded in facts about human physiology but transcend those particular facts, or extends beyond them, to include additional — i.e. non-physiological — facts about the varieties of human experience (and experience, universally). <br></br><br></br>


      </p>
      </div>
    </main>
    <Footer nextTitle="Health as Homeostasis" nextPage="/homeostasis"/>
    </>
  );
}

export default Framing;
