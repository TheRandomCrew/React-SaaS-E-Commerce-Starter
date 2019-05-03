import React from "react";
import { Anchor, Box } from "grommet";
import { FacebookOption, PersonalComputer, Github } from "grommet-icons";

const SocialMedia = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      target="_blank"
      a11yTitle="Visit our site!"
      href="http://root-code.cf/"
      icon={<PersonalComputer color="brand" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Chat with us on Facebook"
      href="https://www.facebook.com/rootsCodeSoftware/"
      icon={<FacebookOption color="brand" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Share feedback on Github"
      href="https://github.com/root-code-software/"
      icon={<Github color="brand" size="medium" />}
    />
  </Box>
);

export { SocialMedia };