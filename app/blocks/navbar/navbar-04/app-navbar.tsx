"use client"

import {
  IconBag2,
  IconBrandApple,
  IconBrandGoogle,
  IconChevronLgDown,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSearch,
  IconSettings
} from "justd-icons"
import { Avatar, Button, Menu, Navbar, Separator } from "ui"

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
  return (
    <Navbar {...props}>
      <Navbar.Nav>
        <Navbar.Logo href="/docs/components/layouts/navbar">
          <IconBrandGoogle className="size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="/docs/components/layouts/navbar">Documentation</Navbar.Item>
          <Navbar.Item href="#">Features</Navbar.Item>
          <Navbar.Item href="#">Support</Navbar.Item>
          <Navbar.Item href="#">Pricing</Navbar.Item>
        </Navbar.Section>
      </Navbar.Nav>
      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6 mx-2" />
          <Navbar.Logo href="/docs/components/layouts/navbar">
            <IconBrandApple className="size-5" />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            <Button appearance="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
              <IconBag2 />
            </Button>
          </Navbar.Flex>
          <Separator orientation="vertical" className="h-6 ml-1 mr-3" />
          <Menu>
            <Menu.Trigger aria-label="Open Menu" className="group gap-x-2 flex items-center">
              <Avatar
                alt="slash"
                size="small"
                shape="square"
                src="/images/sidebar/profile-slash.jpg"
              />
              <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
            </Menu.Trigger>
            <Menu.Content placement="bottom" showArrow className="sm:min-w-56">
              <Menu.Section>
                <Menu.Header separator>
                  <span className="block">Irsyad A. Panjaitan</span>
                  <span className="font-normal text-muted-fg">@irsyadadl</span>
                </Menu.Header>
              </Menu.Section>

              <Menu.Item href="#dashboard">
                <IconDashboard />
                Dashboard
              </Menu.Item>
              <Menu.Item href="#settings">
                <IconSettings />
                Settings
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item>
                <IconCommandRegular />
                Command Menu
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item href="#contact-s">
                <IconHeadphones />
                Contact Support
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item href="#logout">
                <IconLogout />
                Log out
              </Menu.Item>
            </Menu.Content>
          </Menu>
        </Navbar.Flex>
      </Navbar.Compact>
      <Navbar.Inset>{children}</Navbar.Inset>
    </Navbar>
  )
}