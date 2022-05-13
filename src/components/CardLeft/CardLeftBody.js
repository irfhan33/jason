import React from "react";
import CardLeftBox from "./CardLeftBox";
import Accordion, {
  AccordionHeader,
  AccordionContent,
  AccordionContentWrapper,
} from "./../Accordion/Accordion";
import CampaignIcon from "@mui/icons-material/Campaign";
import TwitterIcon from "@mui/icons-material/Twitter";
import IosShareIcon from "@mui/icons-material/IosShare";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const CardLeftBody = () => {
  return (
    <div className="min-h-full px-4 py-2 gap-3 flex flex-col">
      <CardLeftBox>
        <Accordion>
          <AccordionHeader>Get More Traffic</AccordionHeader>
          <AccordionContentWrapper>
            <AccordionContent
              Icon={CardGiftcardIcon}
              title="Offer an instant deal"
              color="text-black"
            />
          </AccordionContentWrapper>
        </Accordion>
      </CardLeftBox>

      <CardLeftBox>
        <Accordion>
          <AccordionHeader>Get More Traffic</AccordionHeader>
          <AccordionContentWrapper>
            <AccordionContent
              Icon={CampaignIcon}
              title="Refer a friend"
              color="text-black"
            />
            <AccordionContent
              Icon={TwitterIcon}
              title="Tweet a Message"
              color="text-[#71A1C5]"
            />{" "}
            <AccordionContent
              Icon={IosShareIcon}
              title="Visit a Page"
              color="text-[#72AA61]"
            />
          </AccordionContentWrapper>
        </Accordion>
      </CardLeftBox>

      <CardLeftBox>
        <Accordion>
          <AccordionHeader>Get More Traffic</AccordionHeader>
          <AccordionContentWrapper>
            <AccordionContent
              Icon={FacebookIcon}
              title="Visit us on Facebook"
              color="text-[#3B5B9A]"
            />
            <AccordionContent
              Icon={TwitterIcon}
              title="Follow us on Twitter"
              color="text-[#71A1C5]"
            />{" "}
            <AccordionContent
              Icon={InstagramIcon}
              title="Visit us on Instagram"
              color="text-[#D4516B]"
            />
            <AccordionContent
              Icon={PinterestIcon}
              title="Follow us on Pinterest"
              color="text-[#A8262B]"
            />
          </AccordionContentWrapper>
        </Accordion>
      </CardLeftBox>
    </div>
  );
};

export default CardLeftBody;
