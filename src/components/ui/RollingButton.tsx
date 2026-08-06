"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

export type ButtonVariant = "default" | "white" | "blue" | "alice-blue";

export interface RollingButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'text'> {
  text?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
}

export const RollingButton = forwardRef<HTMLAnchorElement, RollingButtonProps>(
  ({ text, children, href = "/contact-us", className = "", variant = "alice-blue", showArrow = true, style, ...rest }, ref) => {
    const buttonText = text || children || "";

    let variantAttribute = "white";
    let variantClass = "";
    let textVariantClass = "";
    let arrowVariantClass = "";
    let arrowSrc = "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg";

    if (variant === "blue") {
      variantAttribute = "blue";
      variantClass = "w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66";
      textVariantClass = "w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66";
      arrowVariantClass = "w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66";
      arrowSrc = "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6910991e7df760b9063f4b51_Button-Arrow-Blue.svg";
    } else if (variant === "alice-blue") {
      variantAttribute = "alice-blue";
      variantClass = "w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7";
      arrowSrc = "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg";
    } else if (variant === "white") {
      variantAttribute = "white";
      arrowSrc = "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg";
    }

    return (
      <Link
        ref={ref}
        data-wf--primary-button--variant={variantAttribute}
        href={href}
        className={`primary-button ${variantClass} w-inline-block ${className}`}
        style={style}
        {...rest}
      >
        <div className="primary-button-flex">
          <div className="primary-button-text-wrap">
            <div className={`primary-button-text ${textVariantClass}`}>{buttonText}</div>
            <div className={`primary-button-text-hover ${textVariantClass}`}>{buttonText}</div>
          </div>
          {showArrow && (
            <div className={`primary-button-arrow-wrapper ${arrowVariantClass}`}>
              <div className="primary-button-arrow-wrap">
                <img src={arrowSrc} loading="lazy" alt="Arrow" className="primary-button-arrow" />
                <img src={arrowSrc} loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
              </div>
            </div>
          )}
        </div>
        <div className="primary-button-hover-bg"></div>
      </Link>
    );
  }
);

RollingButton.displayName = "RollingButton";

export default RollingButton;
