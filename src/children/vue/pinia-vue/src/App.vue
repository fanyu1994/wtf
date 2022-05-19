<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTestStore } from "./store/test";
const testStore = useTestStore();
const { name, counter, isAdmin } = storeToRefs(testStore);
testStore.nameAdd("fan", "yu");

interface A {
  name: string;
  age: number;
}

type B = Partial<A>;
type C = Required<A>;
type D = Readonly<A>;
type E = Pick<A, "name">;
type keys = "test1" | "test2" | "test3";
type infos = {
  x: number;
  y: number[];
};
type F = Record<keys, infos>;
type G = Omit<A, "age">;
type H = Exclude<string | number, string>; // 排除string 剩余number
type I = Extract<string | number, string | []>; // 交集string
type J = NonNullable<string | number | null | undefined>; // 用于构造一个类型，这个类型从Type中排除了所有的null、undefined的类型。
type K = Parameters<(s: string) => void>; // 用于根据所有Type中函数类型的参数构造一个元祖类型。 [s:string]
const user: G = {
  name: "dd",
};
const age: J = 11;
</script>

<template>
  <div>
    <h2>{{ testStore }}</h2>
    <h1>name:{{ name }}</h1>
    <h1
      @click="
        () => {
          testStore.counteradd();
        }
      "
    >
      counter:{{ counter }}
    </h1>
    <h1
      @click="
        () => {
          isAdmin = !isAdmin;
        }
      "
    >
      isAdmin:{{ testStore.getterisAdmin }}
    </h1>
  </div>
</template>

<style>
</style>
