<script setup lang="ts">
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>文件</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          新建标签页 <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          新建窗口 <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled>
          新建无痕窗口
        </MenubarItem>
        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>分享</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>邮件链接</MenubarItem>
            <MenubarItem>消息</MenubarItem>
            <MenubarItem>备忘录</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator />
        <MenubarItem>
          打印... <MenubarShortcut>⌘P</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>编辑</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          撤销 <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          重做 <MenubarShortcut>⇧⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>查找</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>搜索网页</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>查找...</MenubarItem>
            <MenubarItem>查找下一个</MenubarItem>
            <MenubarItem>查找上一个</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator />
        <MenubarItem>剪切</MenubarItem>
        <MenubarItem>复制</MenubarItem>
        <MenubarItem>粘贴</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>视图</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem>始终显示书签栏</MenubarCheckboxItem>
        <MenubarCheckboxItem :model-value="true">
          始终显示完整 URL
        </MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarItem inset>
          重新加载 <MenubarShortcut>⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled inset>
          强制重新加载 <MenubarShortcut>⇧⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>
          切换全屏
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>
          隐藏侧边栏
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>资料</MenubarTrigger>
      <MenubarContent>
        <MenubarRadioGroup model-value="benoit">
          <MenubarRadioItem value="andy">
            Andy
          </MenubarRadioItem>
          <MenubarRadioItem value="benoit">
            Benoit
          </MenubarRadioItem>
          <MenubarRadioItem value="luis">
            Luis
          </MenubarRadioItem>
        </MenubarRadioGroup>
        <MenubarSeparator />
        <MenubarItem inset>
          编辑...
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>
          添加资料...
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
