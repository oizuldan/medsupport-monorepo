// Flattens the CMS query result's nav/footer into the shape MskLayout expects.
export function mskChrome(cms: { headerLinks?: any; footerSections?: any } | null | undefined): {
  links: any;
  footerSections: any;
} {
  return {
    links: cms?.headerLinks?.[0]?.links,
    footerSections: cms?.footerSections?.[0]?.sections,
  };
}
