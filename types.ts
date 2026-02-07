import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeaturePoint {
  icon: React.ReactNode;
  text: string;
  highlight?: string; // Text to be bold/colored
}

export interface CaseStudyStat {
  label: string;
  value: string;
  icon: React.ReactNode;
}