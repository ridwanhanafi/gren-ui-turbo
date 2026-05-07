"use client"

import { Button, Icon, Input, Label, Select, Textarea, Spinner, Badge, Alert, Card, Accordion, Modal, Breadcrumb, InputGroup, AppShell, Navbar } from "@gren/ui/react";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState("")
  const [open, setOpen] = React.useState(false);

  // const [page, setPage] = React.useState(1);

  const itembreadcrumb = [{
    label: 'Kategori',
    href: 'https://google.com'
  }, {
    label: 'Produk',
    href: 'https://google.com'
  }]
  return (
    <div>
      <Button>
        Primary Button
      </Button>
      <Icon name="arrow-through-heart-fill" />
      <Input name="adress" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setData(e.target.value)
      } />
      <Input size={"small"} />
      <InputGroup name="username" rightIcon={<Icon name="person-fill" />} />
      <div>{data}</div>
      <Label>label</Label>
      <Select>
        <Select.Option>1. Makan</Select.Option>
        <Select.Option>2. Minum</Select.Option>
      </Select>
      <Textarea defaultValue="isi default" />
      <Spinner />
      {/* <Pagination
        page={page}
        total={5}
        onChange={setPage}
      /> */}
      <Badge>Badge</Badge>
      <Badge variant={"gray"}>Badge</Badge>
      <Badge variant={"indigo"}>Badge</Badge>
      <Badge variant={"yellow"}>Badge</Badge>
      <Alert
        variant="red"
        title="Yey"
        message="Alert notifikasi"
        className="w-full !rounded-none"
      />

      <Button className="bg-amber-700 text-white" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Content >
          <Modal.Header>Hello Mfkr</Modal.Header>
          <Modal.Body>
            The standard Lorem Ipsum passage, used since the 1500s
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

            1914 translation by H. Rackham
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>Batal</Button>
            <Button>Simpan</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Accordion className="mx-auto max-w-md m-3">
        <Accordion.Summary>
          Ini title
        </Accordion.Summary>
        <Accordion.Description>
          Deskripsi
        </Accordion.Description>
      </Accordion>
      <Breadcrumb
        items={itembreadcrumb}
      />
      <Card>
        <Card.Image src="https://learn.zoner.com/wp-content/uploads/2025/04/zoner-ai-image-creator.jpg" />
        <Card.Body>
          <div className="space-y-1">
            <Card.Title>Space Journey</Card.Title>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Card.Description>
          </div>
        </Card.Body>
        <Card.Footer>
          <Button className="w-full !px-3 !py-2 text-sm font-medium">Ini Tombol</Button>
        </Card.Footer>
      </Card>

      <AppShell>
        <AppShell.Sidebar sidebarVisible={true}>
          Sidebar Content
        </AppShell.Sidebar>

        <AppShell.Main>
          {/* <Navbar toggleSidebar={true} onToggle={() => { }} leftContent={<Icon name="person-fill" />} rightContent={<Icon name="person-fill" />}>
            <Navbar.NavbarMenu>
              <Navbar.Menu href="https://google.com">Menu</Navbar.Menu>
              <Navbar.Menu href="https://google.com">Menu</Navbar.Menu>
              <Navbar.Menu href="https://google.com">Menu</Navbar.Menu>
            </Navbar.NavbarMenu>
          </Navbar> */}
          <AppShell.Content>
            sadas
          </AppShell.Content>
        </AppShell.Main>
      </AppShell>
    </div>
  )
}
