import React from 'react';
import styles from './History.module.css'
import Footer from '../components/Footer/Footer';

function History() {
  return (
    <>
    <main className={styles.container}>
        <div className={styles.box}>
        <h3 className={styles.preface}>A Brief History of Biology</h3>
      <p className={styles.content}>
      Although medicine long considered itself equal parts “art and science”, it wasn’t until the establishment of biology as a legitimate field of scientific inquiry - as opposed to a merely descriptive/taxonomic discipline - that medicine became a legitimately “scientific” practice. Medicine, today, is ostensibly applied biology. Given the intimate relationship between the two disciplines, it’s important to understand the context of biology, for it is biology that infused medicine with the form of reductionism that now characterises it.
<br></br><br></br>
For the majority of its history, biology was essentially taxonomy - the systematic classification and categorisation of flora and fauna. Although biology in the broader sense has existed as long as we have, it wasn’t until about the 19th century that it became a “serious science”. With the rise of the mechanistic world picture, which had been gaining steam since Descartes, life was slowly becoming increasingly amenable to scientific inquiry. The view that life was the product of some kind of supernatural, animating force began to be replaced by the belief that man was in fact nothing but a machine, the result of entirely natural - albeit highly complex - physico-chemical interactions. A seminal moment in the history of modern biology was in 1944, when the esteemed physicist Erwin Schrödinger published a book titled ‘What Is Life?” in which he speculated on a variety of big questions concerning the physical mechanisms that define life, including the structure of DNA. The book had a profound impact, inspiring a mob of physicists to get into biology, in search of the great mysteries of life. Even though Schrödinger postulated the potential existence of physical laws hitherto undiscovered, the physical sciences - it was implied - would eventually conquer the question of life. What ensued was the field of molecular biology, along with its crown jewel, the discovery of DNA - life’s blueprint. 
<br></br><br></br>
 With the discovery of DNA, the power of reductionist science was rendered unassailable. Physics and chemistry had, in effect, swallowed the field of biology. In fact, the most ardent proponents of reductionism declared that, in time, there would be no such thing as biology, for biological systems are, at bottom, physical systems. Since the most fundamental level of description is physics, if physics were to ever realise its full potential, it would mean the end of all the other sciences. There is only one Science, according to this line of thinking, and that’s physics. 
 <br></br><br></br>
The field of molecular biology can be understood, at least partially, as an attempt to emulate the success of physics, by reducing biological systems to their constituent parts. The philosophy of physics was brought to bear upon the animate world, and the result was nothing short of revolutionary. While molecular biology was demonstrating the effectiveness of reductionist inquiry, medicine was simultaneously undergoing a reductionist revolution of its own. The development of antibiotics towards the end of the 19th century along with the discovery/invention of other medicines such as aspirin were bringing biology and medicine together, causing them to converge on their belief in the ontological/causal primacy of microphysiological functions. Just as a single bacteria could be the cause of an infectious disease, so too could a faulty gene be the result of some physical or psychological ailment. All disease, it was inferred, must have as its basis some such underlying molecular dysfunction. The goal of medical science, it then follows, should be to ascertain the molecular basis of all disease states, and then develop chemical agents targeted at remedying them. 
<br></br><br></br>

      </p>
      </div>
    </main>
    <Footer nextTitle="Medicine As Applied Reductionism" nextPage="/medicine"/>
    </>
  );
}

export default History;
