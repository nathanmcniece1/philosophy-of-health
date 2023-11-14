import React from 'react';
import styles from './Treatment.module.css'
import Footer from '../components/Footer/Footer';

function Treatment() {
  return (
    <>
    <main className={styles.container}>
        <div className={styles.box}>
        <h3 className={styles.preface}>Treatment Vs Enhancement</h3>
      <p className={styles.content}>
      The ethics of human enhancement is typically framed in terms of the distinction between treatment, on one hand, and enhancement on the other. Treatment is fine, the argument (and our intuition) generally goes. Enhancement, however, is taken to be a completely different kettle of fish. For some reason or another, it’s then held to be unethical and thus undesirable. Now this is a curious fact. Why should we take issue with something that would necessarily entail an improvement of our condition? Keep in mind, if it didn’t entail an improvement of our condition, by definition, it would not be an enhancement. Perhaps the shadows of our history, rather than the valid philosophical logic, explain the intellectual orthodoxy against enhancement. Morbid as our history of ‘enhancement’ is, however, it is not in itself reason enough to argue against it in the future, at least not on solid philosophical grounds. While our past should give us pause, encourage us to reflect on the true source of our motives, and pursue the issues at hand with ultimate humility, it should not prevent us from engaging earnestly in the subject of enhancement. Despite its marketing rhetoric, it’s clear that the ultimate source of the eugenics of the 20th century was not a sincere desire for improvement of the human condition, but instead fear, prejudice, and hatred - the very worst of our kind. It is by no means self-evident that any and all attempts at enhancement in the future must be similarly motivated. On the contrary, the desire to improve our kind can be - and often is - legitimately motivated by very different energies. It would thus be a great tragedy if we were to let the moral repugnance of our past colour our conversation in the present. We must learn what we can from the past, certainly, but we cannot view it as predictive of the future. History is history, the future is another thing. Like our own personal pasts, they only recur if we let them. <br></br><br></br>

The distinction between treatment and enhancement is largely arbitrary. Like the distinction between health and disease, the distinction between treatment and enhancement is equal parts grounded in facts about human physiology and equal parts cultural construct. We take no issue at treating ‘disease’, yet enhancement could easily be framed as treating disease also. It all hinges on how we define disease. If we take disease to mean the divergence from population-based physiological reference ranges - i.e. health norms - then treatment consists only of managing ailments that are associated with some biometric that exists outside of those ranges. If we take disease to mean the absence of health, however, then treatment could reasonably be conceived of as anything that promotes health. Treatment and enhancement, in the context of such a definition, would be one and the same. 
<br></br><br></br>

That’s not to say that there’s no way to draw a distinction between treatment and enhancement. Indeed people draw such a line all the time and the world keeps spinning. It’s just to say that there’s no ‘ultimate’ basis for the separation, no underlying metaphysical divide, if that’s your flavour. Proof of this is just how historically/culturally contingent and malleable our definition of disease - and thus treatment - is. Many conditions we treat today would have once been viewed as merely symptoms of the ageing process or the result of perfectly natural causes and thus not to be intervened on. In some sense, they are therefore enhancements. It’s only because our definition of disease is malleable and contextual, that interventions that were once enhancements are today treatments. <br></br><br></br>

In fact, there’s no need to get quite so cosmic in order to illuminate the arbitrariness - certainly blurriness - of the treatment/enhancement divide. Consider exercise. Is it treatment or enhancement? If you’re already sick, perhaps exercise is treatment. But if you’re ‘disease free’, then how could it be treatment? It must be enhancement, then. And yet no-one takes philosophical issue with exercise. Nor any other ‘natural’ mode of enhancement - meditation, ice bathing, healthy eating etc. 
<br></br><br></br>
Clearly, our issue is not with enhancement per se, but certain kinds of enhancement, or enhancement via certain means. Meditation is fine. But neural implants, well, that’s another thing. Exercise, no problem. Genetic engineering so that you don’t have to exercise, yeah, not so much. So, what’s the difference? Why do we find certain kinds of enhancement perfectly fine, while others morally unacceptable? 
<br></br><br></br>

      </p>
      </div>
    </main>
    <Footer nextTitle="Authenticity" nextPage="/authenticity"/>
    </>
  );
}

export default Treatment;
