import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/shadcn-ui/drawer';
import { useState } from 'react';
import { FiSidebar } from 'react-icons/fi';

export function ResponsiveDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
      <DrawerTrigger asChild className="min-h-6 min-w-6 xl:hidden">
        <FiSidebar />
      </DrawerTrigger>
      <DrawerContent className="z-100 h-dvh">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            et quis facere esse animi voluptatum possimus aliquam modi vero nemo
            tempore, consequatur, laboriosam illum dolor eaque quas vel a!
            Quibusdam!
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <button>Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
