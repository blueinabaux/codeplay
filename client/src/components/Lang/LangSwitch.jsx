import React from "react";
import {
  Box,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { LANG_VERSIONS } from "../../../constants.js";

const LangSwitch = ({ language, onSelect }) => {

  const languages = Object.entries(LANG_VERSIONS);

  return (

    <Box  mb={2}  bgColor="">
      <Menu>
        <MenuButton py="1vh" px="2vw"  as={Button}>{language}</MenuButton>
        <MenuList>
          {languages.map(([language, version]) => (
            <MenuItem key={language} onClick={() => onSelect(language)}>
              {language}
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
    
  );
};
export default LangSwitch;