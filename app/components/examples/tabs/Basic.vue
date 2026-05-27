<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <Tabs default-value="account">
    <TabsList>
      <TabsTrigger value="account">
        账户
      </TabsTrigger>
      <TabsTrigger value="password">
        密码
      </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      在这里修改你的账户信息。
    </TabsContent>
    <TabsContent value="password">
      在这里修改你的密码。
    </TabsContent>
  </Tabs>
</template>
