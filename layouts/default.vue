<template>
  <Loader />
  <Navbar />
  <Container>
    <BorderWrapper>
      <slot />
    </BorderWrapper>
  </Container>
  <Footer />
  <Cursor />
</template>