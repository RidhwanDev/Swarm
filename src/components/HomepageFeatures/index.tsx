import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg" | "img">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Power to the people",
    Svg: require("@site/static/img/group.svg").default,
    description: (
      <>
        Driven by the community to deliver the most accurate and agreed upon
        standards
      </>
    ),
  },
  {
    title: "Ever growing",
    Svg: require("@site/static/img/growing.svg").default,
    description: (
      <>While trends change and new best practices arise, so do we.</>
    ),
  },
  {
    title: "Reliable",
    Svg: require("@site/static/img/handshake.svg").default,
    description: (
      <>
        Reviewed and approved by professionals around the world on a frequent
        basis.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
