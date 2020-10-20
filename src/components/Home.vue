<template>
  <Page>
    <StackLayout>
      <Label text="Home"></Label>
      <Button @tap="cerrarSesion" class="-primary" text="Cerrar Sesión"></Button>
    </StackLayout>
  </Page>
</template>

<script>
import App from './App'
import {remove} from 'tns-core-modules/application-settings'
export default {
  methods: {
    cerrarSesion () {
      remove("token");
      this.$navigateTo(App)
    },
  },
}
</script>