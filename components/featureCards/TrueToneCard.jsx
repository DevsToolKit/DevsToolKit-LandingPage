import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

function TrueToneCard() {
  return (
    <div className="border-b border-l border-r border-t border-solid border-white/10 flex flex-col gap-10 p-[30px] md:p-[40px] bg-transparent rounded-xl md:flex-1 md:h-full overflow-hidden relative w-full h-[600px]">
      <div className="flex flex-col justify-start gap-[10px] w-full z-[10]">
        <h4 className="text-white text-[20px] tracking-[-0.3px] leading-[1.4em]">
          TrueTone: Perfect Color Contrast for Your Website
        </h4>
        <p className="text-gray-400 poppins-regular">
          TrueTone helps ensure your website's color contrast is accessible and
          visually appealing across all devices. Quickly check your color
          combinations and optimize your design for better readability and user
          experience.
        </p>
        <div>
          <p className="text-white/80 underline-offset-4 hover:text-white hover:underline transition duration-300 ease-in-out poppins-regular">
            Learn more
          </p>
        </div>
      </div>
      <div className="flex-[1_0_0px] h-[1px] overflow-visible relative w-full bg-black">
        <div className="absolute top-[-77px] left-[calc(50%-410px/2)] w-[410px] h-[557px] flex-none design-card-mask">
          <section className="flex w-full h-full place-items-center m-0 p-0 list-none opacity-1 overflow-hidden">
            <motion.ul
              animate={{ y: [0, -620, -1240] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ y: "calc(-100% * 1)" }}
              className="flex w-full h-full place-items-center m-0 p-0 list-none gap-0 relative flex-col will-change-transform translate-y-[-0px]"
            >
              <li>
                <div className="h-[620px] overflow-hidden relative w-[410px]">
                  <div className="h-[612px] left-[-11px] overflow-visible absolute w-[857px] top-0">
                    <div className="absolute rounded-inherit top-0 left-0 bottom-0 right-0">
                      <img
                        decoding="async"
                        sizes="857px"
                        srcSet="https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=512 512w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png 2894w"
                        src="https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=2048"
                        alt="TrueTone Preview"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-[620px] overflow-hidden relative w-[410px]">
                  <div className="h-[612px] left-[-432px] overflow-visible absolute w-[857px] top-0">
                    <div className="absolute rounded-inherit top-0 left-0 bottom-0 right-0">
                      <img
                        decoding="async"
                        sizes="857px"
                        srcSet="https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=512 512w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png 2894w"
                        src="https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=2048"
                        alt="TrueTone Layout"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li aria-hidden="true">
                <div className="h-[620px] overflow-hidden relative w-[410px]">
                  <div className="h-[612px] left-[-11px] overflow-visible absolute w-[857px] top-0">
                    <div className="absolute rounded-inherit top-0 left-0 bottom-0 right-0">
                      <img
                        decoding="async"
                        sizes="857px"
                        srcSet="https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=512 512w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png 2894w"
                        src="https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=2048"
                        alt="TrueTone Responsive Design"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li aria-hidden="true">
                <div className="h-[620px] overflow-hidden relative w-[410px]">
                  <div className="h-[612px] left-[-432px] overflow-visible absolute w-[857px] top-0">
                    <div className="absolute rounded-inherit top-0 left-0 bottom-0 right-0">
                      <img
                        decoding="async"
                        sizes="857px"
                        srcSet="https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=512 512w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png 2894w"
                        src="https://framerusercontent.com/images/og6VDctqHQIFhmlIio6bTNWg.png?scale-down-to=2048"
                        alt="TrueTone Accessibility"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </motion.ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TrueToneCard;
