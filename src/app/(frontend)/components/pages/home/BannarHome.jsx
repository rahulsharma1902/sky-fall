import React from "react";
import AnimatedChip from "../../animations/AnimatedChip";
import AnimatedLeftLines from "../../animations/AnimatedLeftLines";
import ScrambleText from "../../animations/ScrambleText";
import { motion } from "framer-motion";

const BannarHome = () => {
  return (
    <section className="customBGHeroSection container-fluid">
      <div className="position-relative   height540 d-flex align-items-center justify-content-start">
        <AnimatedLeftLines />
        <AnimatedChip />
        <div className="container-fluid ">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text=":===================================:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="-+===========*%+==================================:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="-*" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-+" />
              &nbsp;&nbsp;&nbsp;
              <ScrambleText text=".=+=============================:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="=+" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-+" />
              &nbsp;&nbsp;&nbsp;
              <ScrambleText text="%." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=":+======================:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="=+" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-====*#==+%=====+##=======================:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="=+" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-*:" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-+" />
              &nbsp;&nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-+" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="=+" />
              &nbsp;&nbsp;
              <ScrambleText text=".%" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="=+" />
              &nbsp; &nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-+" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="================================+++*%*====+%=====+=" />
              &nbsp;&nbsp;&nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-+" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="===================================-" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="*=" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="=+" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="==========================================##==========." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-#." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="=========================================+%#+================:" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="=======================================+=." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="===============================================+=." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="================================================+##====+-" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text=" ==================================================%*====%#==============." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="=============================-" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="+=" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=".%." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="*-" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="=============================*%+============+." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="+=" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=".=+============*%=============:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="*-" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp; <ScrambleText text="-*" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-*" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="*-" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ScrambleText text="=*:" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="-*" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="*-" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=":==================*%=============:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="*-" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=".%." />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="++" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text=":#" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ScrambleText text="=+===========:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="-+===========+%*========================================:" />
            </p>
            <p className="heroFont ff-j f-c-p text-end">
              <ScrambleText text="-========================================:" />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BannarHome;
