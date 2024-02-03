import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    hobby: "",
    gender: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (value) => {
    setFormData({ ...formData, gender: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isInvalid =
      !formData.email ||
      !formData.password ||
      !formData.hobby ||
      !formData.gender ||
      !formData.address;

    if (isInvalid) {
      setError("please fill all the required fields");
      return;
    }

    alert("register success");
    console.log("data: ", formData);
  };

  return (
    <Box p={8}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl">Member Registration</Text>
        <Text fontSize="md">Please fill this form</Text>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Hobby</FormLabel>
            <Select
              name="hobby"
              value={formData.hobby}
              onChange={handleInputChange}
            >
              <option value="reading">Reading</option>
              <option value="sport">Sport</option>
              <option value="gaming">Gaming</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              onChange={handleGenderChange}
              value={formData.gender}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female" marginLeft={8}>
                Female
              </Radio>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea
              name="address"
              required
              onChange={handleInputChange}
              value={formData.address}
            />
          </FormControl>

          <Box marginTop={8}>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </Box>
        </form>
      </VStack>
    </Box>
  );
};

export default RegistrationForm;
