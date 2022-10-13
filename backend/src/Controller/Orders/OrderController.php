<?php

namespace App\Controller\Orders;

use App\Orders\Service\OrderServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    private OrderServiceInterface $orderService;

    public function __construct(OrderServiceInterface $orderService)
    {
        $this->orderService = $orderService;
    }

    /**
     * @Route("/api/orders", methods={"GET"})
     * @return JsonResponse
     */
    public function ordersAction(Request $request): JsonResponse
    {
        $by          = $request->query->get('by') ?: '';
        $searchQuery = $request->query->get('query') ?: '';

        $orders = $this->orderService->getAll($by, $searchQuery);

        return $this->json($orders);
    }
}