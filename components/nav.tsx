/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, NavLink, Flex } from 'theme-ui'
import Link from 'next/link'
import { CategoryConfig } from "./../configs/categoryconfig";

const categories = CategoryConfig();

const Nav = () => (
  <header sx={{height: '60px', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <Flex as='nav' sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <NavLink href="/">
        <a sx={{fontWeight: 'bold', fontSize: 2, cursor: 'pointer'}}>RTNews</a>
      </NavLink>

      {categories.map((link, index) => {
                return (        
                    <NavLink href={`/${link.sectionId}`} p={1}>
                      {link.sectionName}
                    </NavLink>
                 
                );
              })}
           

    </Flex>
  </header>
)

export default Nav