<?php

namespace App\Orders\Service;

use App\Orders\Model\Order;

interface OrderServiceInterface
{
    /**
     * @param string $by
     * @param string $query
     * @return Order[]
     */
    public function getAll(string $by, string $query): array;
}