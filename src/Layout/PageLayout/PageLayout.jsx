import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
    const {pathname} = useLocation()
    return (
        <Flex>
            {/* sidebar a la isquierda */}
            {pathname !== '/auth' ? (<Box w={{base:"70px", md:"240px"}}>
                <Sidebar/>
            </Box>) : null}
            {/* contenido a la derecha */}
            <Box flex={1} w={{base:"calc(100% - 70px)", md:"cal(100% - 240px)"}}>
                {children}
            </Box>
        </Flex>
    );
}

export default PageLayout;
