import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import RecipeDetails from "./recipe-details";

describe("RecipeDetails component", () => {

    beforeEach(() => {
        // Mock recipe data
        const recipe = {
            id: 1,
            title: "Test Recipe Title",
            image: "test-image.jpg",
            summary: "This is a test recipe.",
            instructions: "Test instructions",
            extendedIngredients: [
                { id: 1, original: "Ingredient 1" },
                { id: 2, original: "Ingredient 2" },
            ],
        };
        // Render the component
        render(<RecipeDetails recipe={recipe} />);
    });

    test("renders the recipe details correctly", () => {

        // Assert that the recipe title is rendered
        expect(screen.getByText(/Test Recipe Title/i)).toBeInTheDocument();

        // Assert that the recipe summary is rendered
        expect(screen.getByText("This is a test recipe.")).toBeInTheDocument();

        // Assert that the recipe instructions are rendered
        expect(screen.getByText("Test instructions")).toBeInTheDocument();

        // Assert that the recipe ingredients are rendered
        expect(screen.getByText("Ingredient 1")).toBeInTheDocument();
        expect(screen.getByText("Ingredient 2")).toBeInTheDocument();
    });

});
