"use client"

import {
  IconBrandApple,
  IconCart,
  IconChartBar,
  IconChevronLgDown,
  IconCommandRegular,
  IconCube,
  IconDashboard,
  IconGear,
  IconHeadphones,
  IconLogout,
  IconPeople,
  IconSettings,
  IconShield
} from "justd-icons"
import {
  Avatar,
  Link,
  Menu,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSectionGroup
} from "ui"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <SidebarLabel className="font-medium">Apple</SidebarLabel>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarSectionGroup>
          <SidebarSection>
            {navigation.map((item, index) => (
              <SidebarItem key={index} isCurrent={item.isCurrent} href="#" badge={item?.badge}>
                {item.icon}
                <SidebarLabel>{item.label}</SidebarLabel>
              </SidebarItem>
            ))}
          </SidebarSection>
        </SidebarSectionGroup>
      </SidebarContent>

      <SidebarFooter>
        <Menu>
          <Menu.Trigger aria-label="Profile" data-slot="menu-trigger">
            <Avatar shape="square" src="/images/avatar/cobain.jpg" />
            <div className="group-data-[collapsible=dock]:hidden text-sm">
              Kurt Cobain
              <span className="block -mt-0.5 text-muted-fg">kurt@cobain.com</span>
            </div>
            <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
          </Menu.Trigger>
          <Menu.Content placement="bottom right" className="sm:min-w-(--trigger-width)">
            <Menu.Section>
              <Menu.Header separator>
                <span className="block">Kurt Cobain</span>
                <span className="font-normal text-muted-fg">@cobain</span>
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
            <Menu.Item href="#security">
              <IconShield />
              Security
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              <IconCommandRegular />
              Command Menu
            </Menu.Item>

            <Menu.Item href="#contact">
              <IconHeadphones />
              Customer Support
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#logout">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </SidebarFooter>
    </Sidebar>
  )
}

const navigation = [
  { label: "Overview", icon: <IconDashboard />, isCurrent: true, badge: undefined },
  { label: "Orders", icon: <IconCart />, isCurrent: false, badge: 24 },
  { label: "Products", icon: <IconCube />, isCurrent: false, badge: "31.51K" },
  { label: "Customers", icon: <IconPeople />, isCurrent: false, badge: "12K" },
  { label: "Reports", icon: <IconChartBar />, isCurrent: false, badge: 3 },
  { label: "Settings", icon: <IconGear />, isCurrent: false, badge: undefined }
]