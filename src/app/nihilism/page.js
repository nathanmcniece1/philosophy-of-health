import React from 'react';
import styles from './Nihilism.module.css'
import Footer from '../components/Footer/Footer';

function Nihilism() {
  return (
    <>
    <main className={styles.container}>
        <div className={styles.box}>
        <h3 className={styles.preface}>Medical Nihilism</h3>
      <p className={styles.content}>
      Modern medicine has largely failed to live up to expectations, especially its own. With the exception of a very small list of interventions, we are yet to employ the use of modern technology to the benefit of human health, at least not to any significant degree. On the contrary, despite the advancements in basic science and biomedical technology - and they are substantial - health outcomes are, in many cases, actually declining. Given the immense progress we’ve made across almost every scientific vector, it would be reasonable to assume that said progress would translate to a healthier population - at the very least a more effective medical system. But alas, this isn’t what we find. This begs the question, Why? Why is that, contrary to the ideals and promise of the “science of medicine”, our health is deteriorating, while our tools and technology grow evermore sophisticated? And, if we accept that modern medicine is largely ineffectual at producing desired outcomes, as the evidence suggests, is there any reason to believe this might - at some point - change? Do the failures of modern medicine, in other words, reflect the inherent complexity of its end - human health - or rather underlying flaws in the means by which it seeks to procure it? And lastly, if a more effective medical system is indeed possible, by what means will we realise it? and what might it look like? 
      <br></br><br></br>

Perhaps it strikes the reader as somewhat unfair, the claim that medicine has largely failed to deliver on its promise of a healthier world. After all, what about antibiotics? Not to mention x-rays and MRI and vaccines and chemotherapy and double bypass surgery and how could you forget viagra! To be sure, medicine is not without its success stories, its accomplishments. Most impressive of all, since 1900 the average life expectancy in the US has increased by approximately 30 years. Not bad at all, right? As remarkable as this achievement is, however, it provides a slightly misleading picture as to medicine’s performance as an enterprise. In fact, while modern medicine is partially responsible for the increase in life expectancy, the majority of the gains are actually due to advances in public health, namely improved hygiene and sanitation (this raises the question, What even Is medicine? But we’ll get to that later). Indeed, barring what amount to outliers - the invention of penicillin and vaccines - if you remove the genuinely “modern” features of medicine, it’s not all that much of a stretch to say that the world would be largely unaffected. As it happens, health care - in the modern world - is only a very minor determinant of health.
<br></br><br></br>
<em>
[ It has been estimated, by one paper in the New England Journal of Medicine (citing McGinnis et al) that health care is responsible for 10% of the health equation, the remaining 90% being genetics, social context, environmental exposure, and general behaviour/lifestye (From “We Can Do Better - Improving the Health of the American People”)] 
</em>
<br></br><br></br>
The most important factors (responsible for around 90% of health outcomes) being genetics, social context, environmental exposure, and general lifestyle. And yet, of these causal factors, health care receives the overwhelming majority of our financial and attentional resources. In the US, for instance, health care amounts to around 20% of GDP. So not only is health care a relatively insignificant factor in terms of procuring human health, it’s also really fucking expensive. At least if it was cheap… 
<br></br><br></br>
Now this is not to understate the achievements of modern medicine, nor is it to dismiss the immense value that it provides certain individuals, everyday, the world over. State-of-the-art medical technologies are truly marvels of the highest order, testaments to the ingenuity of our kind, symbols of human potential - all that good stuff. And they even save lives, sometimes. Instead it’s simply to say that, in terms of producing the desired outcome - a healthy population - most of this technology has been for naught. While we deserve a pat on the back for our technical ingenuity, our technological difference has to date made very little difference to what matters: our health. 
<br></br><br></br>
The less-than-perfectly-correlated relationship between medical technology and human health is reflected most saliently in the American health statistics. Despite having the most technologically sophisticated medical system, the US ranks 46th in the world in terms of life expectancy, and 42nd in infant mortality. In case you forgot, the US is the largest national economy in the world, in many respects the poster-child of (post)modernity, the world’s intellectual epicentre. We should therefore expect them to have the most effective health care system. And although you can’t win everything, 46th and 42nd respectively is just plain embarrassing. The reason for pointing this out, beyond simply beating up on the US for fun, is that in order to defend the modern health care regime/model/paradigm, one must first reconcile this fact, its most tragic failure. A tall order, to be certain. 
<br></br><br></br>
Much has been written about the failings of health care, on every level, so I won’t bang on too long. But even if we limit ourselves to assessing the efficacy of medicine’s bread and butter - drugs - it’s astonishing just how dire the picture is. If America is the poster-child of modernity, drugs are the poster-children of modern medicine. And yet it’s a dirty little fact that most drugs don’t work all that well. Moreover, when they do work, they’re generally accompanied by a variety of undesirable side-effects or they’re incorrectly/inappropriately prescribed. What results from a sober, objective assessment of the efficacy of drugs - and medical interventions more broadly - is a kind of “medical nihilism,” a sense that, despite our scientific progress, we’re still living in the Stone Age of medicine. And so while science may be the means by which we develop and discover new medicines, medicine itself is scarcely more scientific than Galen’s humorism. 
<br></br><br></br>

      </p>
      </div>
    </main>
    <Footer nextTitle="Reductionism In Biology" nextPage="/reductionism"/>
    </>
  );
}

export default Nihilism;
