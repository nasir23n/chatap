<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::all()->random()->id,
            'content' => $this->faker->paragraph,
            'is_sender' => random_int(0,1),
            'reciver' => User::all()->random()->id,
            'photos' => null,
            'reactions' => null,
        ];
    }
}
