import React from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';
import { Inter } from 'next/font/google';

function Menu() {
    return (
        <div className={styles.contentsContainer}>
            <div className={`${styles.contentsItem} ${styles.cover}`}>
                <div className={styles.contentInfo}>
                    <Image className={styles.smallCvr} src="/images/cover.png" alt="Book Cover" width={100} height={150} />
                    <div className={styles.infoText}>
                        <h3 className="title">The Philosophy of Health</h3>
                        <p className={styles.authorName}>Musashi</p>
                        <button className={styles.actionButton}>
                            <Image className={styles.dwnldSmall} src="/images/download.png" alt="Download" width={20} height={20} />
                            Download
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Home</p>
            </div>
            <div className={styles.contentsItem}>
                <h2 className={styles.contentsHeading}>Introduction</h2>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Preface</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Welcome to Philosophy</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>What Is Philosophy?</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>A 'Philosophy of Life'</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Philosophy Is Dead, So What?</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>The Philosophy of Health</p>
            </div>
            <div className={styles.contentsItem}>
                <h2 className={styles.contentsHeading}>What Is Health?</h2>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Framing the Problem</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Health as the Absence of Sickness</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Health as Homeostasis</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Towards a Positive Conception of Health</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Health as Well-Being</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Health as Freedom</p>
            </div>
            <div className={styles.contentsItem}>
                <h2 className={styles.contentsHeading}>Why Life Is Good</h2>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>The Current Consensus</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Life Is Good</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>What Is Life?</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Death Is Bad</p>
            </div>
            <div className={styles.contentsItem}>
                <h2 className={styles.contentsHeading}>The Ethics of Human Enhancement</h2>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>The Historical Background</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Treatment vs Enhancement</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Authenticity</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Unintended Consequences</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>What’s Good?</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>No Pain, No Good?</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Thought Experiment: $99 Enlightenment</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Thought Experiment: The Learnomade</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Moral Enhancement</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Enhancement and Ex-Risk</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>What To Do?</p>
            </div>
            <div className={styles.contentsItem}>
                <h2 className={styles.contentsHeading}>The Enhancement Impulse</h2>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>The Pursuit of ‘Better’</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>The Duality of Enhancement</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Culture & Competitiveness</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Getting Our Minds Right</p>
            </div>
            <div className={styles.contentsItem}>
                <h2 className={styles.contentsHeading}>The Metaphysics of Desire</h2>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>What Is Desire?</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Maslow's Hierarchy of Desires</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Nietzsche's 'Will-To-Power'</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Idle Speculation</p>
            </div>
            <div className={styles.contentsItem}>
                <h2 className={styles.contentsHeading}>The Hunt for the Holy Grail</h2>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Medical Nihilism</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Prevention as Research Paradigm</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>General Purpose Health Technologies</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Reductionism In Biology</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Medicine as Applied Reductionism</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Towards An Emergent Medicine</p>
            </div>
            <div className={styles.contentsItem}>
                <p className={styles.contentsText}>Science vs Engineering in Biology</p>
            </div>
        </div>
    );
}

export default Menu;
