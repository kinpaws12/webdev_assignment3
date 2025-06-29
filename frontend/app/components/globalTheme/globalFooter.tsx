import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

interface GlobalFooterProps {}

export default function GlobalFooter(props: GlobalFooterProps) {
  return (
    <Footer container className="bg-gray-50 border-t border-gray-100 mt-10 py-1 text-sm">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <FooterCopyright href="#" by="GROUP7™" year={2025} />
        <FooterLinkGroup className="flex space-x-4 mt-4 md:mt-0">
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Events</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </div>
    </Footer>
  );
}
