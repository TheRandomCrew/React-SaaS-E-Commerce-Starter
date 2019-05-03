import React from "react";
import {
    Box,
    Grommet,
    TextInput,
} from "grommet";
import { Search, Menu } from "grommet-icons";
import {
    Hardware,
    Notification,
    UtilizationCard,
    VirtualMachinesCard,
} from "./components";

import { hardware, utilization, vms, notification } from "./data";
import { theme } from "../../style/globalTheme";
import { AppHeader } from "./Nav/AppHeader";
import Footer from "./Footer/Footer";


const Dashboard = ({ user }) => {
    const userSession = {
        user: {
            name: "Shimi Shimi",
            thumbnail: "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
        },
        items: [
            {
                label: "Logout",
                href: "#"
            }
        ]
    };
    if(user){
        userSession.user = {
            name: user.name, 
            thumbnail: 'https://robohash.org/'+user.given_name+'?set=set4'
        };
        userSession.items.push({
            label: user.name,
            href: '#'
        })
    }
    return(
            <Grommet theme={theme} full>
                <Box fill background="light-3">
                    <AppHeader
                        appName="Fort Collins, Cluster 4"
                        appIcon={<Menu />}
                        userSession={userSession}
                    />
                    <Box flex overflow="auto" gap="medium" pad="medium">
                        <Box
                            flex={false}
                            overflow="auto"
                            round="large"
                            background={{ color: "dark-5", opacity: "weak" }}
                            direction="row"
                            align="center"
                            pad={{ horizontal: "medium", vertical: "small" }}
                            margin={{ horizontal: "medium", top: "medium" }}
                        >
                            <Search color="brand" />
                            <TextInput plain placeholder="Search Cluster" type="search" />
                        </Box>
                        <Box flex={false} direction="row-responsive" wrap>
                            <Box gap="large" flex="grow" margin="medium">
                                <Notification data={notification} />
                                <VirtualMachinesCard data={vms} />
                            </Box>
                            <Box gap="large" flex="grow" margin="medium">
                                {utilization.map(data => (
                                    <UtilizationCard key={data.name} data={data} />
                                ))}
                            </Box>
                            <Box flex="grow" margin="medium">
                                <Hardware data={hardware} />
                            </Box>
                        </Box>
                    </Box>
        
                    <Footer/>
                </Box>
            </Grommet>
    )
}

export default Dashboard;