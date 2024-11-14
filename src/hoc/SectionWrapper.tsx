import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { FC } from "react";

type SectionWrapperProps = {
  idName: string;
};

// Definindo o tipo para o componente que o HOC vai receber
function SectionWrapper(Component: FC, idName: string) {
  const HOC: FC<SectionWrapperProps> = () => (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );

  return HOC;
}

export default SectionWrapper;
