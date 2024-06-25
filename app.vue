<script lang="ts" setup>
import { RegisterValidationSchema } from "~/schemas/RegisterSchema";
const formState = ref({
  email: "",
  name: "",
  password: "",
  passwordConfirm: "",
});

function handleFormSubmit(
  event: FormSubmitEvent<z.output<typeof RegisterValidationSchema>>
) {
  console.log("Form => ", event.data)
}

</script>

<template>
  <UContainer class="grid place-content-center h-screen">
    <UCard class="w-[500px]">
      <template #header>
        <h2 class="text-xl font-bold">Register</h2>
      </template>

      <UForm
        :schema="RegisterValidationSchema"
        @submit="handleFormSubmit"
        :state="formState"
      >
        <UFormGroup name="name" label="Name">
          <UInput type="text" v-model="formState.name" placeholder="John Doe" />
        </UFormGroup>

        <UFormGroup name="email" label="Email" class="mt-4">
          <UInput
            type="email"
            v-model="formState.email"
            placeholder="John@example.com"
          />
        </UFormGroup>

        <UFormGroup name="password" label="Password" class="mt-4">
          <UInput
            type="password"
            v-model="formState.password"
            placeholder="********"
          />
        </UFormGroup>

        <UFormGroup
          name="confirmPassword"
          label="Confirm Password"
          class="mt-4"
        >
          <UInput
            type="password"
            v-model="formState.passwordConfirm"
            placeholder="********"
          />
        </UFormGroup>

        <UButton type="submit" class="mt-4">Register</UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
