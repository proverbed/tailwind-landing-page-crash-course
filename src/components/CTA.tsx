import Button from "./Button";
import styles from "./CTA.module.css";

const CTA: React.FC = () => {
  return (
    <section
      id="cta"
      className={`bg-brightRed  bg-no-repeat ${styles.backgroundPattern}`}
    >
      <div className="container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0 md:py-12">
        <h2 className="text-center text-5xl font-bold text-white md:max-w-xl md:text-left md:text-4xl">
          Simplify how your team works today
        </h2>
        <div>
          <Button text="Get Started" inverted={true} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
