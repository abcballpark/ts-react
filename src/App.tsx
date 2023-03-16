import React from 'react';

import { SaasProvider } from '@saas-ui/react';

import {
    Sidebar,
    SidebarSection,
    NavItem,
} from "@saas-ui/sidebar"


import { AppShell } from "@saas-ui/app-shell";
import { Box, Text } from "@chakra-ui/react";

import ProgramCard from "./components/ProgramCard"

export interface AppProps {
    name: string
};

export const App = (props: AppProps) => {
    return (
        <SaasProvider>
            <AppShell
                navbar={
                    <Box as="header" borderBottomWidth="1px" py="2" px="4">
                        <Text>Hi</Text>
                    </Box>
                }
                sidebar={
                    <Sidebar>
                        <SidebarSection>
                            <NavItem label="Home" />
                            <NavItem label="Settings" />
                        </SidebarSection>
                    </Sidebar>
                }
            >
                <Box as="main" flex="1" py="2" px="4" overflowY="auto">
                    Your application content
                </Box>
            </AppShell>
        </SaasProvider>
    );
};
