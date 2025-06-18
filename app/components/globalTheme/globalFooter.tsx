import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

interface GlobalFooterProps {
  
}

export default function GlobalFooter(props: GlobalFooterProps) {
  return (
    <Footer container>
      <FooterCopyright href="#" by="GROUP7™" year={2025} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Events</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
