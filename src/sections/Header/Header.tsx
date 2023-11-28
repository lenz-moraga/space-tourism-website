"use client";
import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import { useDeviceType } from "@/hooks/useDeviceType/useDeviceType";

const Header = () => {
  const { isMobile } = useDeviceType();

  if (isMobile) {
    return <MobileHeader />;
  }

  return <header>Desktop Content</header>;
};

export default Header;
