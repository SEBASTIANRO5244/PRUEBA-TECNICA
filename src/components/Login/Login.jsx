import {
  Background,
  Container,
  Title,
  Input,
  Label,
  Button,
  ButtonText,
} from "./styled";

export const LoginV = ({ handleSubmit, handleInputs }) => {
  return (
    <Background>
      <Container>
        <Title>Bienvenidos</Title>

        <form onSubmit={handleSubmit} id="buttoner">
          <Label>Identificación</Label>
          <Input
            placeholder="Identificación"
            onChange={handleInputs}
            name={"identification"}
          />
          <Label>Contraseña</Label>
          <Input
            placeholder="Contraseña"
            onChange={handleInputs}
            name={"password"}
            type="password"
          />
        </form>

        <Button form="buttoner" type="submit">
          <ButtonText>Continuar</ButtonText>
        </Button>
      </Container>
    </Background>
  );
};
