import axios from "axios";
import { API } from "../constants";

describe("API feature", () => {
    test("if it returns an array of objects", async () => {
        const allOffices = await axios.get(API).then((res) => res.data);
        expect.arrayContaining(allOffices);
    });

    test("if the response contains objects matching the provided data structure", async () => {
        const allOffices = await axios.get(API).then((res) => res.data);

        expect(allOffices).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    online: expect.any(Boolean),
                    location: expect.any(Object),
                    category: expect.any(String),
                    lines: expect.any(Object),
                }),
            ])
        );
    });
});
