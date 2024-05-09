import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

export default function Intro() {
  return (
    <div className=" relative text-white text-5xl text-center px-4">
      <div className=" relative top-1/2 -mt-16" style={{ transform: "translate3d(0, 30%, 0)" }}>
        <p>When you want something,</p>
        <p>all the universe conspires</p>
        <p>in helping you to achieve it.</p>
        <p>
          <strong>Paulo Coelho</strong>
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>Feed is that conspiracy:</p>
        <p>the conspiracy of trust.</p>
        <p>
          <br />
          <br />
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>Trust is the single</p>
        <p>most important ingredient</p>
        <p>missing from digital relationships.</p>
        <p>
          <br />
          <br />
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>Boston Consulting Group</p>
        <p>and the World Economic Forum</p>
        <p>forecast the digital economy</p>
        <p>to be worth between</p>
        <p>
          <strong>1.5 and 2.5 trillion dollars</strong>
        </p>
        <p>
          <strong>by 2016.</strong>
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>The difference</p>
        <p>between those numbers</p>
        <p>
          &quot;is &quot; <a href="">trust</a>
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>
          Feed is a digital mechanism of <strong>trust</strong>
        </p>
      </div>
    </div>
  );
}
